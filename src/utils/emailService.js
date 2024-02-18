import sgMail from '@sendgrid/mail'

const sendEmail = async(to,subject,html)=>
{
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: to, // Change to your recipient
  from: process.env.SENDGRID_FROM_MAIL, // Change to your verified sender
  subject: subject,
  text: html,
  html: html,
}
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })
return 0
}

const sendConfrimMail = async(data)=>{
    try {
        let subject = `${data.srno} : Your request is received`
        let html = `<div>
        <h1 style="text-align: center;">Zendesk</h1>
        <p>Hello ${data.name},</p>
        <p>Greetings for the day!</p>
        <p>We have received your request successfully and the same will be resolved at the earliest. PFB the details</p>
        <table>
            <tbody>
                <tr>
                    <td>SR NO</td>  
                    <td>${data.srno}</td>
                </tr>
                <tr>
                    <td>Type</td>  
                    <td>${data.type}</td>
                </tr>
                <tr>
                    <td>Title</td>  
                    <td>${data.title}</td>
                </tr>
                <tr>
                    <td>Description</td>  
                    <td>${data.description}</td>
                </tr>
                <tr>
                    <td>Created At</td>  
                    <td>${data.createdAt}</td>
                </tr>
                <tr>
                    <td>Status</td>  
                    <td>${data.status}</td>
                </tr>
            </tbody>
        </table>
        <p>You can check the status of your request in this <a href="${process.env.APP_URL}/request-status?srno=${data.srno}">link</a></p>
        <p>Thanks,</p>
        <h4>Zendesk Team</h4>
    </div>`
    await sendEmail(data.email,subject,html)
    } catch (error) {
        
    }
}

const sendAssignedMail = async(data)=>{
    try {
        let subject = `${data.srno} : Your request is assigned to our staff`
        let html = `<div>
        <h1 style="text-align: center;">Zendesk</h1>
        <p>Hello ${data.name},</p>
        <p>Greetings for the day!</p>
        <p>Your request is assigned to our captain ${data.assignedTo} and the same will be resolved at the earliest. PFB the details</p>
        <table>
            <tbody>
                <tr>
                    <td>SR NO</td>  
                    <td>${data.srno}</td>
                </tr>
                <tr>
                    <td>Type</td>  
                    <td>${data.type}</td>
                </tr>
                <tr>
                    <td>Title</td>  
                    <td>${data.title}</td>
                </tr>
                <tr>
                    <td>Description</td>  
                    <td>${data.description}</td>
                </tr>
                <tr>
                    <td>Created At</td>  
                    <td>${data.createdAt}</td>
                </tr>
                 <tr>
                    <td>Status</td>  
                    <td>${data.status}</td>
                </tr>
                 <tr>
                    <td>Assigned To</td>  
                    <td>${data.assignedTo}</td>
                </tr>
                 <tr>
                    <td>Assigned At</td>  
                    <td>${data.assignedAt}</td>
                </tr>
            </tbody>
        </table>
        <p>You can check the status of your request in this <a href="${process.env.APP_URL}/request-status?srno=${data.srno}">link</a></p>
        <p>Thanks,</p>
        <h4>Zendesk Team</h4>
    </div>`
    await sendEmail(data.email,subject,html)
    } catch (error) {
        
    }
}

const sendClossedMail = async(data)=>{
    try {
        let subject = `${data.srno} : Your request is resolved`
        let html = `<div>
        <h1 style="text-align: center;">Zendesk</h1>
        <p>Hello ${data.name},</p>
        <p>Greetings for the day!</p>
        <p>Your request is resolved by our team. PFB the details</p>
        <table>
            <tbody>
                <tr>
                    <td>SR NO</td>  
                    <td>${data.srno}</td>
                </tr>
                <tr>
                    <td>Type</td>  
                    <td>${data.type}</td>
                </tr>
                <tr>
                    <td>Title</td>  
                    <td>${data.title}</td>
                </tr>
                <tr>
                    <td>Description</td>  
                    <td>${data.description}</td>
                </tr>
                <tr>
                    <td>Created At</td>  
                    <td>${data.createdAt}</td>
                </tr>
                 <tr>
                    <td>Status</td>  
                    <td>${data.status}</td>
                </tr>
                 <tr>
                    <td>Assigned To</td>  
                    <td>${data.assignedTo}</td>
                </tr>
                 <tr>
                    <td>Assigned At</td>  
                    <td>${data.assignedAt}</td>
                </tr>
                 <tr>
                    <td>Closed At</td>  
                    <td>${data.closedAt}</td>
                </tr>
                 <tr>
                    <td>Resolution</td>  
                    <td>${data.resolution}</td>
                </tr>
            </tbody>
        </table>
        <p>You can check the status of your request in this <a href="${process.env.APP_URL}/request-status?srno=${data.srno}">link</a></p>
        <p>Thanks,</p>
        <h4>Zendesk Team</h4>
    </div>`
    await sendEmail(data.email,subject,html)
    } catch (error) {
        
    }
}



export default {
sendConfrimMail,
sendAssignedMail,
sendClossedMail
}