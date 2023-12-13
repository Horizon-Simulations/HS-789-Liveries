import { ExecTask, TaskOfTasks } from "@flybywiresim/igniter";

export default new TaskOfTasks("all", [
    // A339X Livery Package Task
    new TaskOfTasks("hs789-livery-package", [
        // Prepare the out folder and any other pre tasks.
        // Currently, these can be run in parallel but in the future, we may need to run them in sequence if there are any dependencies.
        new TaskOfTasks("preparation", [
            new ExecTask("copy-base-files", "npm run build-hs789-livery-package:copy-base-files")
        ], true),
        new TaskOfTasks("dist", [
            new ExecTask("manifests", "npm run build-hs789-livery-package:manifest")
        ])
    ])
]);