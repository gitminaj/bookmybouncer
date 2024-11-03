const db = require("../config/db");

const createBouncer = (req, res) => {
    const {firstName, middleName, lastName, number, emergencyNumber, emailId, closeUpImage, 
        midShotImage1, midShotImage2, fullProfileImage, aadhaarNumber, aadhaarImage, panNumber, panImage, 
        passportNumber, passportImage, drivingLicenseNumber, drivingLicenseImage, voterIdNumber, voterImage, 
        weaponsLicenseImage, tenthMarksheetImage, twelthMarksheetImage, degreeDiplomaImage, schoolLeavingCertificateImage, 
        policeClearanceCertificateImage, religion, languages, native, gender, age, height, shoulder, chest, back, waist, thighs, 
        tshirtSize, trouserSize, shoeSize, bloodGroup, medicalHistory } = res.body;

    const sql =
       `INSERT INTO bouncer (firstName, middleName, lastName, number, emergencyNumber, emailId, closeUpImage, 
       midShotImage1, midShotImage2, fullProfileImage, aadhaarNumber, aadhaarImage, panNumber, panImage, passportNumber, passportImage, 
       drivingLicenseNumber, drivingLicenseImage, voterIdNumber, voterImage, weaponsLicenseImage, tenthMarksheetImage, twelthMarksheetImage, 
       degreeDiplomaImage, schoolLeavingCertificateImage, policeClearanceCertificateImage, religion, languages, native, gender, age, height, 
       shoulder, chest, back, waist, thighs, tshirtSize, trouserSize, shoeSize, bloodGroup, medicalHistory, createdAt ) 
       VALUES 
       ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())` ;

     const data = db.query(sql, [firstName, middleName, lastName, number, emergencyNumber, emailId, closeUpImage, 
        midShotImage1, midShotImage2, fullProfileImage, aadhaarNumber, aadhaarImage, panNumber, panImage, 
        passportNumber, passportImage, drivingLicenseNumber, drivingLicenseImage, voterIdNumber, voterImage, 
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
        message: "bouncer created"
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
}

module.exports = { createBouncer,getBouncer };
