const datalist = require('../jsonData.json')


const getlength = async (req, res) => {
    try {
        let len = datalist.length;
        res.status(200).json({ status: 200, message: "success", data: { TotalUser: len } });
    } catch (error) {
        res.json({ error: error })
    }
};



const getlist = async (req, res) => {
    try {
        const groupBy = (input, key) => {
            return input.reduce((acc, currentObject) => {
                let groupKey = currentObject[key];

                acc[groupKey] = { id: currentObject.id, ip_address: currentObject.ip_address, mark: currentObject.mark };
                return acc;
            }, {});
        }

        let group = groupBy(datalist, "first_name")
        res.status(200).json({ status: 200, message: "success", data: group });
    }
    catch (err) {
        res.status(400).json({ status: 400, message: err.message || err });
    }
};



const getbyquery = async (req, res) => {
    try {

        let finding = req.query.search
        // console.log(finding);
        const result = datalist.find(data => data.first_name === finding || data.last_name === finding || data.email === finding)
        res.status(200).json({ status: 200, message: "success", data: result });
    } catch (err) {
        res.status(400).json({ status: 400, message: err.message || err });
    }
};



const getuser = async (req, res) => {
    try {
        let datafilter = req.query.search
        if (datafilter) {
            console.log(datafilter);
            let mydata = datalist.filter(({ gender }) => gender.includes(datafilter))

            res.status(200).json({ status: 200, message: "success", data: mydata });
        }

    } catch (error) {
        res.json({ error: error })
    }
}


const getFullName = async (req, res) => {
    try {
        let userdata = await datalist.map((val) => {

            return {
                name: val.first_name + " " + val.last_name
            }


        })

        res.status(200).json({ status: 200, message: "success", data: userdata });
    }
    catch (err) {
        res.status(400).json({ status: 400, message: err.message || err });
    }
};

const geteach = async (req, res) => {
    try {
        const o = [];

        datalist.forEach(function (user) {
            o.push({ id: user.id, ip_address: user.ip_address });
        });
        res.status(200).json({
            status: 200, message: "success", data: o
        });
    } catch (error) {
        res.json({ error: error })
    }
};

const getmap = async (req, res) => {
    try {
        let userdata = await datalist.map((val) => {

            return {
                id: val.id, name: val.first_name + " " + val.last_name, mark: val.mark + 5
            }


        })

        res.status(200).json({ status: 200, message: "success", data: userdata });
    }
    catch (err) {
        res.status(400).json({ status: 400, message: err.message || err });
    }
};



module.exports = {
    getuser, getbyquery, getFullName, geteach, getlist, getmap, getlength
}
