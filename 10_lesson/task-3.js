function handleObject(obj, key, action) {

    switch (action) {
        case 'get':
            return {key};
        break;
        case 'add':
            obj.newKey = '';
            return obj;
        break;
        case 'delete':
            delete obj[key];
            return obj;
        break;
        default:
            return obj;
        break;
    }
}
const student = {
	name: 'Maxim',
	programmingLanguage: 'JavaScript',
};

const result = handleObject(student, 'programmingLanguage', 'delete');
console.log('result', result);