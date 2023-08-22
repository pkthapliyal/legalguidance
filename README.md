# legalguidance
## About 
- Legal Guidance is a comprehensive platform where clients can find experienced lawyers to address their legal matters effectively and receive professional advice and assistance Find the right lawyer for your legal needs at Legal Guidance, a one-stop website offering expert legal assistance and guidance to clients seeking reliable legal solutions.

## Homepage 
- This page has a navbar to navigate different pages and show some dummy data and slideshows.
  ![image](https://github.com/pkthapliyal/legalguidance/assets/121335947/1b4daf9e-586e-47cb-94f2-a22a8916c605)

## Sign-up page
- On this page, a new user is being registered. The user has to fill name, mobile, email, password, and role (client, lawyer).
  ![image](https://github.com/pkthapliyal/legalguidance/assets/121335947/a8c26e79-bf5f-4647-983d-d94ae530a2b0)

## Sign-in page
- On this page, the user has to enter the credentials. From the backend in the token, we'll get the role. If the role is client user will be redirected to  the client side or the same for the lawyer side.
  ![image](https://github.com/pkthapliyal/legalguidance/assets/121335947/e5bbeb73-2d4d-42be-bcd3-a267a69ecb76)

## Client-side Lawyer page
- This page has all lawyer cards. The lawyer card has all the details of the lawyer eg: name, specializations, location, overview, practice area, image, and a button for booking an appointment. When you click on the practice area, it shows all the practice areas. When a user clicks on a particular button to book an appointment on a lawyer card, it takes the user to the booking page.
  ![image](https://github.com/pkthapliyal/legalguidance/assets/121335947/cbb1740c-4753-4fe7-9570-d76c35ab2aa0)

## Booking page
- This page has a calendar and four-time slots, form to collect the client's details. Once a user clicks on a date, it renders all the booked slots on the slots by making them red or disabled. A user can select any available slot and fill in the details eg: name, email, subject and extra details in the form. Once the user submits the details the server sends emails to the user for confirming the appointment with the time and subject. Then on the front end user redirects to the appointments page, where all the booking of a user renders on the page. A user can delete his/her appointments.
- ![image](https://github.com/pkthapliyal/legalguidance/assets/121335947/1c11f9a7-bffa-4bcc-b3ed-9c67d2af4772)

## Client's appointments page
- This page has all the appointments of a particular user, where all the booking of a user renders on the page. Each appointment is rendered on the table with the cancel appointment button, by clicking on that button A user can delete his/her appointments.
![image](https://github.com/pkthapliyal/legalguidance/assets/121335947/933ba4dd-e3ec-40f8-b0dc-811124c9a98b)


## Tech-stack
### Front end 
- <p>HTML, CSS, JavaScript</p>
### Front end 
- <p>Node, Express, MongoDB, Nodemailer, JWT, Passport.js</p>
## Links
- Deployed link : https://legal-guidance.netlify.app/



