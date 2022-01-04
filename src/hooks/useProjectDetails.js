const useProjectDetails = () => {
    const projectDetails = [
        {
            id: 1,
            projectName: "EazyAccess (Customers)",
            projectDescription: `An application that allows users to find and connect with service providers within and outside their location.`,
            projectPurpose: `To help bridge the gap between service providers and clients in need of these services. EazyAccess eases the process of
            getting domestic services all across the country at any place or time.`,
            projectStack: "Vue 3, Quasar, Firebase",
            challenges: `
                The major challenge I faced was trying to ensure that the chat component was robust as possible with 
                features similar to what is available in Whatsapp and Telegram. I had to enure that the chat component 
                grouped messages according to the dates the messages were posted. Also, it was a bit challenging displaying the number 
                of unread messages to the users.
            `,
            lessonsLearned: `
               I masterred the use of the composition API in Vue 3. I gained experience in using quasar to build a mobile applications.
               I learned how to create a robust chat component that can be used in both desktop and mobile apps.
               I learned how to add a voice recording feature to a chat component. I was a great opportunity
               to work with diverse Twilio and Google maps APIs.
            `,
            images: ["pep1.PNG", "pep2.PNG", "pep3.PNG"],
            projectUrl: "https://eazyaccess-customers.web.app/#/",
            featured: true
        },
        {
            id: 2,
            projectName: "EazyAccess (Vendors)",
            projectDescription: `An application that helps service providers to find and connect with customers and sell their products.`,
            projectPurpose: `To help bridge the gap between service providers and clients in need of these services. EazyAccess eases the process of
            getting domestic services all across the country at any place or time.`,
            projectStack: "Vue 3, Quasar, Firebase",
            challenges: `
                Same as the EazyAccess customers application.
            `,
            lessonsLearned: ` Same as the EazyAccess customers application.`,
            images: ["pep1.PNG", "pep2.PNG", "pep3.PNG"],
            projectUrl: "https://eazyaccess-customers.web.app/#/",
            featured: true
        },

        {
            id: 3,
            projectName: "PEP Exams",
            projectDescription: `PEP Exams is a quiz application I built for Nigerian Pharmacists. 
            It contains past questions, answers and downloadable study resources required to prepare for the 
            professional licensing examination.`,
            projectPurpose: `I built this project because I like to solve real world problems
            with my code.
            By the way, I am also a Pharmacist 😇. So I saw it as an opportunity to give back to the pharmacy profession.
            It was also an opportunity to practice the things I have learned in Nuxt.js. So this was the first project I built with Nuxt.js`,
            projectStack: "Nuxt.js, Node/Express.js, MongoDB",
            challenges: `
                One of the challenges I faced was how to store and persist sensitive user's data without utilizing web storage e.g local storage.
                For example, I wanted to store data regarding whether a user has made payment or not. I knew that if I saved that information in web storage,
                the data could be manipulated by users. To solve that challenge, I leveraged the "nuxtServerInit" action 
                provided by Nuxt.js. So just before the client side is rendered to authenticated users, I retrieve the
                user's unique ID (provided by mongoDB) from cookies. Then I call a function that fetches the user's information from the server and 
                use the returned data to initialize Vuex store.
                That way, I only needed to store the user's ID in cookies and be rest assured that on page refresh, I will always retrieve
                the user's data from the server via server side rendering.
            `,
            lessonsLearned: `
                I learned how to extend my knowledge of Vue.js to 
                build server side rendered apps with Nuxt.js.
            `,
            images: ["pep1.PNG", "pep2.PNG", "pep3.PNG"],
            projectUrl: "https://pepexam.herokuapp.com/",
            featured: false
        },
    ]
    return projectDetails;
}
 
export default useProjectDetails;