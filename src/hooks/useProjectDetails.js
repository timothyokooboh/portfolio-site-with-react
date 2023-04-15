const useProjectDetails = () => {
  const projectDetails = [
    {
      id: 1,
      title: "Myllo",
      description: `A reading list management and note taking app. Every public resource that is added by users 
        automatically become available for other users to read, like and add to their own reading list`,
      purpose: `Myllo helps users to add resources to their reading list, know the ones they have read, will read or currently reading.
                Users can also take notes of their thoughts or things they learned while reading a learning resource`,
      stack: ["TypeScript", "React.js", "Chakra-ui", "firebase"],
      challenges: `
                Implementing an intuitive drag and drop interface for managing reading list was not easy at first.
                But I was able to overcome that challenge, thanks to react-beautiful-dnd NPM package.
            `,
      lessonsLearned: `I learned how to use Chakra-ui and React Query. I learned how to implement a drag and drop interface
                using react-beautiful-dnd`,
      images: ["../myllo-1.png", "../myllo-2.png", "../myllo-3.png"],
      url: "https://myllo.co/",
      featured: true,
    },
    {
      id: 2,
      title: "Myllo Google Chrome Extension",
      description: `An application that helps service providers to find and connect with customers and sell their products.`,
      purpose: `To help bridge the gap between service providers and clients in need of these services. EazyAccess eases the process of
            getting domestic services all across the country at any place or time.`,
      stack: ["vue 3", "quasar", "firebase"],
      challenges: `
                Same as the EazyAccess customers application.
            `,
      lessonsLearned: ` Same as the EazyAccess customers application.`,
      images: ["../eazy-ven-1.png", "../eazy-ven-2.png", "../eazy-ven-3.png"],
      url: "https://eazyaccess-vendors.web.app/#/",
      featured: false,
    },
    {
      id: 3,
      title: "EazyAccess (Customers)",
      description: `An application that helps users to find and connect with service providers within and outside their location.`,
      purpose: `To help bridge the gap between service providers and clients in need of these services. EazyAccess eases the process of
            getting domestic services all across the country at any place or time.`,
      stack: ["vue 3", "quasar", "firebase"],
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
      images: ["../eazy-cus-1.png", "../eazy-cus-2.png", "../eazy-cus-3.png"],
      url: "https://eazyaccess-customers.web.app/#/",
      featured: true,
    },
    {
      id: 4,
      title: "EazyAccess (Vendors)",
      description: `An application that helps service providers to find and connect with customers and sell their products.`,
      purpose: `To help bridge the gap between service providers and clients in need of these services. EazyAccess eases the process of
            getting domestic services all across the country at any place or time.`,
      stack: ["vue 3", "quasar", "firebase"],
      challenges: `
                Same as the EazyAccess customers application.
            `,
      lessonsLearned: ` Same as the EazyAccess customers application.`,
      images: ["../eazy-ven-1.png", "../eazy-ven-2.png", "../eazy-ven-3.png"],
      url: "https://eazyaccess-vendors.web.app/#/",
      featured: false,
    },

    // {
    //     id: 5,
    //     title: "PEP Exams",
    //     description: `A quiz application for Nigerian Pharmacists.
    //     It contains past questions, answers and downloadable study resources required to prepare for the
    //     professional licensing examination.`,
    //     purpose: `I built this project because I like to solve real world problems
    //     with my code.
    //     By the way, I am also a Pharmacist 😇. So I saw it as an opportunity to give back to the pharmacy profession.
    //     It was also an opportunity to practice the things I have learned in Nuxt.js. So this was the first project I built with Nuxt.js`,
    //    stack: ["nuxt.js", "Node/Express.js", "MongoDB"],
    //     challenges: `
    //         One of the challenges I faced was how to store and persist sensitive user's data without utilizing web storage e.g local storage.
    //         For example, I wanted to store data regarding user s' payment status. I knew that if I stored the data in web storage,
    //         it could be manipulated by users. To solve this challenge, I leveraged the "nuxtServerInit" action
    //         provided by Nuxt.js. So just before the client side is rendered to authenticated users, I retrieve the
    //         user's unique ID (provided by mongoDB) from the cookies. Then I call a function that fetches the user's information from the server and
    //         use the returned data to initialize Vuex store.
    //         That way, I only needed to store the user's ID in cookies and be rest assured that on page refresh, I will always retrieve
    //         the user's data from the server via server side rendering.
    //     `,
    //     lessonsLearned: `
    //         I learned how to extend my knowledge of Vue.js to
    //         build server side rendered apps with Nuxt.js.
    //     `,
    //     images: ["../pep-1.png", "../pep-2.png", "../pep-3.png"],
    //     url: "https://pepexam.herokuapp.com/",
    //     featured: false
    // },
  ];

  return projectDetails;
};

export default useProjectDetails;
