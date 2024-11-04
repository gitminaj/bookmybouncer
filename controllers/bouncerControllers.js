const db = require("../config/db");

const createBouncer = async (req, res) => {
    const {firstName, middleName, lastName, number, emergencyNumber, emailId, closeUpImage, 
        midShotImage1, midShotImage2, fullProfileImage, aadhaarNumber, aadhaarImage, panNumber, panImage, 
        passportNumber, passportImage, drivingLicenseNumber, drivingLicenseImage, voterIdNumber, voterIdImage, 
        weaponsLicenseImage, tenthMarksheetImage, twelthMarksheetImage, degreeDiplomaImage, schoolLeavingCertificateImage, 
        policeClearanceCertificateImage, religion, languages, native, gender, age, height, shoulder, chest, back, waist, thighs, 
        tshirtSize, trouserSize, shoeSize, bloodGroup, medicalHistory } = req.body;

    const sql =
       `INSERT INTO bouncer (firstName, middleName, lastName, number, emergencyNumber, emailId, closeUpImage, 
       midShotImage1, midShotImage2, fullProfileImage, aadhaarNumber, aadhaarImage, panNumber, panImage, passportNumber, passportImage, 
       drivingLicenseNumber, drivingLicenseImage, voterIdNumber, voterIdImage, weaponsLicenseImage, tenthMarksheetImage, twelthMarksheetImage, 
       degreeDiplomaImage, schoolLeavingCertificateImage, policeClearanceCertificateImage, religion, languages, native, gender, age, height, 
       shoulder, chest, back, waist, thighs, tshirtSize, trouserSize, shoeSize, bloodGroup, medicalHistory, createdAt ) 
       VALUES 
       ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())` ;

     const data = await db.query(sql, [firstName, middleName, lastName, number, emergencyNumber, emailId, closeUpImage, 
        midShotImage1, midShotImage2, fullProfileImage, aadhaarNumber, aadhaarImage, panNumber, panImage, 
        passportNumber, passportImage, drivingLicenseNumber, drivingLicenseImage, voterIdNumber, voterIdImage, 
        weaponsLicenseImage, tenthMarksheetImage, twelthMarksheetImage, degreeDiplomaImage, schoolLeavingCertificateImage, 
        policeClearanceCertificateImage, religion, languages, native, gender, age, height, shoulder, chest, back, waist, thighs, 
        tshirtSize, trouserSize, shoeSize, bloodGroup, medicalHistory]);

    if(!data){
        return res.send({
            success: false,
            message: "failed"
        })
    }
    res.send({
        success: true,
        message: "bouncer profile created"
    })
};


const getBouncer = async (req,res) =>{
    const data = await db.query("SELECT * FROM bouncer");

    if(!data){
        return res.status(404).send({
            success: false,
            message: "data not found"
        })
    }
    res.send({
        success: true,
        message: "success",
       data:  data[0],


    })
};

const getBouncerById = async (req,res)=>{
    const id = req.params.id;
    const sql = "SELECT * FROM bouncer WHERE bouncerId=?";
    const data = await db.query(sql,[id]);
    if(!data){
        return res.status(404).send({
            success: false,
            message: "Data not found",
        })
    }
    res.status(200).send({
        success: true,
        message: "Data found",
        data: data[0]
    })

}

const deleteBouncerById = (req, res) =>{
    const id = req.params.id;
    if(!id){
        res.send({
            message: "enter id or valid id"
        })
    }
    const sql = "DELETE FROM bouncer WHERE bouncerId=?";
    const data = db.query(sql,[id]);
    if(!data){
        return res.send({
            success: false,
            message: "Operation failed"
        })
    }
    res.status(200).send({
        success: true,
        message: "Deleted successfully"
    })
}


module.exports = { createBouncer, getBouncer, getBouncerById, deleteBouncerById };
