module.exports = async function (context, myQueueItem) {
    context.log('JavaScript queue trigger function 2.0 processed work item', myQueueItem);
};
process.stdout.write("hello: ");
