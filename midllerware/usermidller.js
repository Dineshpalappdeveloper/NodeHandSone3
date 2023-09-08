const validate = (req, res, next) => {
    const age = req.params.age;
    if (age >= 18) {
        next();
        console.log("hello");
    } else {
        res.send([
            { status: "not  Allowed" },
            {
                Meaaage: "It is a Application lavel routing",
            }
            , {
                request: "you wants to see the Routing lavel then go to index.js and comment the  line  number 8 "
            }
        ]);
    }
};
module.exports = validate;
