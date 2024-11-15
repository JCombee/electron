import express from 'express';
import { utilityProcess } from 'electron';
import state from '../state';
import { notifyLaravel } from "../utils";
import { join } from 'path';
const router = express.Router();
function startProcess(settings) {
    const { alias, cmd, cwd, env, persistent } = settings;
    if (getProcess(alias) !== undefined) {
        return state.processes[alias];
    }
    const proc = utilityProcess.fork(join(__dirname, '../../electron-plugin/dist/server/childProcess.js'), cmd, {
        cwd,
        serviceName: alias,
        stdio: 'pipe',
        env: Object.assign(Object.assign({}, process.env), env)
    });
    proc.stdout.on('data', (data) => {
        notifyLaravel('events', {
            event: 'Native\\Laravel\\Events\\ChildProcess\\MessageReceived',
            payload: {
                alias,
                data: data.toString(),
            }
        });
    });
    proc.stderr.on('data', (data) => {
        console.error('Error received from process [' + alias + ']:', data.toString());
        notifyLaravel('events', {
            event: 'Native\\Laravel\\Events\\ChildProcess\\ErrorReceived',
            payload: {
                alias,
                data: data.toString(),
            }
        });
    });
    proc.on('spawn', () => {
        console.log('Process [' + alias + '] spawned!');
        state.processes[alias] = {
            pid: proc.pid,
            proc,
            settings
        };
        notifyLaravel('events', {
            event: 'Native\\Laravel\\Events\\ChildProcess\\ProcessSpawned',
            payload: [alias, proc.pid]
        });
    });
    proc.on('exit', (code) => {
        console.log(`Process [${alias}] exited with code [${code}].`);
        notifyLaravel('events', {
            event: 'Native\\Laravel\\Events\\ChildProcess\\ProcessExited',
            payload: {
                alias,
                code,
            }
        });
        delete state.processes[alias];
        if (persistent) {
            startProcess(settings);
        }
    });
    return {
        pid: null,
        proc,
        settings
    };
}
function stopProcess(alias) {
    const proc = getProcess(alias);
    if (proc === undefined) {
        return;
    }
    if (proc.kill()) {
        delete state.processes[alias];
    }
}
function getProcess(alias) {
    var _a;
    return (_a = state.processes[alias]) === null || _a === void 0 ? void 0 : _a.proc;
}
function getSettings(alias) {
    var _a;
    return (_a = state.processes[alias]) === null || _a === void 0 ? void 0 : _a.settings;
}
router.post('/start', (req, res) => {
    const proc = startProcess(req.body);
    res.json(proc);
});
router.post('/stop', (req, res) => {
    const { alias } = req.body;
    stopProcess(alias);
    res.sendStatus(200);
});
router.post('/restart', (req, res) => {
    const { alias } = req.body;
    const settings = getSettings(alias);
    stopProcess(alias);
    if (settings === undefined) {
        res.sendStatus(410);
        return;
    }
    const proc = startProcess(settings);
    res.json(proc);
});
router.get('/get/:alias', (req, res) => {
    const { alias } = req.params;
    const proc = state.processes[alias];
    if (proc === undefined) {
        res.sendStatus(410);
        return;
    }
    res.json(proc);
});
router.get('/', (req, res) => {
    res.json(state.processes);
});
router.post('/message', (req, res) => {
    const { alias, message } = req.body;
    const proc = getProcess(alias);
    if (proc === undefined) {
        res.sendStatus(200);
        return;
    }
    proc.postMessage(message);
    res.sendStatus(200);
});
export default router;
