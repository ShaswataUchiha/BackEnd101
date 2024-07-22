const User = require('../modules/user.modules')

exports.createUser = async(req, res) => {
    try {
        const {name, email, password} = req.body

        if(!name && !email && !password) {
            return res.status(400).json({
                success : false,
                data : null,
                message : "All fields are required"
            })
        }

        const response = await  User.create({name, email, password})

        res.status(201).json(
            {
                success : true,
                data : response,
                message : 'User created successfully'
            }
        )
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            data : "did not create", 
            message : error.message
        })
    }
}

exports.showUser = (req, res) => {
    res.send(`User Page`)
}