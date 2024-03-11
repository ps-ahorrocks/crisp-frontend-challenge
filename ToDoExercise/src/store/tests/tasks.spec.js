import {taskAdded, taskCompleted} from "../tasks"
import store from "../store"

describe("taskSlice", () => {
    let testStore;
    beforeEach(() => {
        testStore = store;
    })
    const taskSlice = () => testStore.getState().tasks;

    describe("Test Actions", () => {
        it("Test Complete", () => {
            let testName = "Test";
            let testCategory = "work"
            testStore.dispatch(taskAdded({title: testName, category: testCategory}));
            testStore.dispatch(taskCompleted({id: 1}));

            expect(taskSlice().storedTasks[0].completed).toBe(true);
        })
    })
});