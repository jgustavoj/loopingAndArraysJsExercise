contact = {
    fullname: "Jane Doe",
    phone: "321-321-4321",
    email: "test@test.com"
}

   let result = [];
        for(let key in contact){
            result.push(key + " : " + contact[key]);
        }

console.log(result)