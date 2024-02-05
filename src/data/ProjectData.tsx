import Daily1BlogImage from "@/assets/mockups/Daily1Blog.png";
import NetflixImage from "@/assets/mockups/Netflix.png";
import SpartxImage from "@/assets/mockups/SpartxDev.png";
import LaundryImage from "@/assets/mockups/Laundry.png";
import CloudVaultImage from "@/assets/mockups/MediaCloud.png";
import ThreadsImage from "@/assets/mockups/ThreadsClone.png";
import Booking from "@/assets/mockups/Booking.png";
import BubbleImage from "@/assets/mockups/BubbleGame.png";
import ZomatoImage from "@/assets/mockups/Zomato.png";

// Image Check

type projectDataProps = {
  id: number;
  name: string;
  image: string;
  technology: string;
  role: string;
  description: string;
  keyFeatures: Array<{
    id: number;
    feature: string;
  }>;
  websiteURL?: string;
  detailedFeatures: Array<{
    title: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  }>;
  challenges: string;
  solution: string;
  results: string;
  learnings: string;
  futureImprovements: string;
  github?: string;
};

export const projectData: projectDataProps[] = [
  {
    id: 1,
    name: "Daily1Blog",
    image: Daily1BlogImage.src,
    technology: "React Js Firebase",
    role: "Full Stack Web Developer",
    description:
      "Developed Daily1Blog, a dynamic blogging website using React.js and Firebase. This platform allows users to explore and read a variety of blog posts. With integrated user authentication, logged-in users gain the additional capability to contribute to the platform by uploading their own blog posts.",
    keyFeatures: [
      {
        id: 1,
        feature: "User Authentication",
      },
      {
        id: 2,
        feature: "Blog Reading",
      },
      {
        id: 3,
        feature: "User Contribution",
      },
      {
        id: 4,
        feature: "Responsive Design",
      },
    ],
    websiteURL: "https://daily1blog.web.app/",
    detailedFeatures: [
      {
        title: "User Authentication",
        features: [
          {
            title: "Secure Sign-Up/Login",
            description:
              "Users can create accounts securely and log in using Firebase Authentication.",
          },
          {
            title: "Personalized Profiles",
            description:
              "Each user has a unique profile with customizable details.",
          },
        ],
      },
      {
        title: "Blog Reading",
        features: [
          {
            title: "Explore Posts",
            description:
              "Users can browse and read a diverse range of blog posts.",
          },
          {
            title: "Search Functionality",
            description:
              "Implemented a search feature for efficient post discovery.",
          },
        ],
      },
      {
        title: "User Contribution",
        features: [
          {
            title: "Upload Posts",
            description:
              "Authenticated users can contribute to Daily1Blog by uploading their own blog posts.",
          },
          {
            title: "Post Management",
            description: "Users can edit and delete their uploaded posts.",
          },
        ],
      },
      {
        title: "Responsive Design",
        features: [
          {
            title: "Cross-Device Compatibility",
            description:
              "Ensured a responsive design for optimal user experience on various devices.",
          },
          {
            title: "Intuitive Navigation",
            description:
              "Designed a user-friendly interface for easy navigation and post discovery.",
          },
        ],
      },
    ],
    challenges:
      "Balancing user authentication security with a seamless user experience, implementing a flexible and efficient blog post management system, and optimizing the site for responsive design.",
    solution:
      "Leveraged React.js for front-end development and Firebase for user authentication and data storage. Implemented security measures for user authentication and designed a modular and responsive UI for an optimal user experience.",
    results:
      "Daily1Blog provides users with a dynamic and secure platform for reading and contributing blog posts. Positive feedback highlights the site's clean design, intuitive navigation, and the seamless integration of user contributions.",
    learnings:
      "Enhanced proficiency in full-stack development, improved skills in user authentication, and gained insights into creating a user-friendly blogging platform.",
    futureImprovements:
      "Considering future enhancements, such as implementing user comments, social sharing features, and further customization options for user profiles",
  },
  {
    id: 2,
    name: "Netflix App Clone",
    image: NetflixImage.src,
    technology: "React Native & Firebase",
    role: "Full Stack Development",

    description:
      "Developed a Netflix clone mobile application using React Native and Firebase.\n" +
      "Features dynamic fetching of movie data from a third-party API to create a realistic and engaging streaming experience.\n" +
      "The application mirrors the Netflix interface, offering users a visually appealing layout and seamless navigation.",
    keyFeatures: [
      {
        id: 1,
        feature: "Real-time movie data fetching from a third-party API",
      },
      {
        id: 2,
        feature:
          "Netflix-inspired user interface with dynamic content categories",
      },
      {
        id: 3,
        feature: "Responsive design for optimal viewing on various device",
      },
    ],
    github: "https://github.com/developervinay1/NetflixApp-RN",
    detailedFeatures: [
      {
        title: "Dynamic Data",
        features: [
          {
            title: "Dynamic Movie Database",
            description:
              "Utilized React.js to dynamically fetch movies data from an API, ensuring an up-to-date and extensive movie library.",
          },
        ],
      },
      {
        title: "User Interface",
        features: [
          {
            title: "Intuitive UI",
            description:
              "Designed a user-friendly interface inspired by Netflix's sleek and intuitive design",
          },
        ],
      },
      {
        title: "Movie Details",
        features: [
          {
            title: "Information",
            description:
              "Provided detailed movie pages with information, trailers, and cast details for an immersive viewing experience.",
          },
        ],
      },
    ],
    challenges:
      "Implementing dynamic data fetching from an API to ensure real-time updates and a diverse catalog of movies, while maintaining a user-friendly interface.",
    solution:
      "Utilized React.js for building a modular and reusable component-based structure. Integrated API calls to dynamically fetch and display movie information, ensuring a responsive and interactive user experience.",
    results:
      "Successfully recreated the Netflix experience with dynamic movie data, providing users with an authentic streaming feel. Positive user feedback reflects the project's success in delivering a visually pleasing and functionally robust platform.",
    learnings:
      "Expanded proficiency in React.js, API integration, and front-end development. Gained insights into managing dynamic data to create a compelling user interface.",
    futureImprovements:
      "Considering future enhancements, such as user authentication, personalized recommendations, and additional features to elevate the Netflix clone's user experience.",
  },
  {
    id: 3,
    name: "Spartx Dev",
    image: SpartxImage.src,
    technology: "Front-End Development, Shopify Liquid",
    role: "Front-end Web Developer",
    description:
      "Built Spartx Dev, a robust e-commerce website from the ground up, utilizing Shopify Liquid for dynamic content and templating. This project seamlessly integrates HTML, CSS, and JavaScript to create a visually appealing and user-friendly online shopping experience.",
    keyFeatures: [
      {
        id: 1,
        feature: "Shopify Liquid Templating",
      },
      {
        id: 2,
        feature: "Interactive Cart and Checkout",
      },
      {
        id: 3,
        feature: "Navigation and Filters",
      },
      {
        id: 4,
        feature: "Custom Features:",
      },
    ],
    websiteURL: "https://spartx-dev.myshopify.com/",
    detailedFeatures: [
      {
        title: "Dynamic Product Pages",
        features: [
          {
            title: "Shopify Liquid Templating",
            description:
              "Utilized Shopify Liquid to dynamically generate product pages.",
          },
          {
            title: "Product Information",
            description:
              "Displayed detailed product information, pricing, and images.",
          },
        ],
      },
      {
        title: "Responsive Design",
        features: [
          {
            title: "Cross-Device Compatibility:",
            description:
              "Ensured a responsive design for a seamless shopping experience on various devices.",
          },
          {
            title: "Mobile-Friendly Interface",
            description:
              "Optimized the UI for smaller screens while maintaining visual appeal.",
          },
        ],
      },
      {
        title: "Interactive cart and checkout",
        features: [
          {
            title: "Add to Cart Functionality",
            description:
              "Implemented an interactive Add to Cart feature for a user-friendly shopping process.",
          },
          {
            title: "Secure Checkout",
            description:
              "Created a secure and streamlined checkout process for a seamless customer journey.",
          },
        ],
      },
      {
        title: "Navigation and Filters",
        features: [
          {
            title: "Intuitive Navigation",
            description:
              "Designed a user-friendly navigation system for easy product discovery.",
          },
          {
            title: "Product Filters",
            description:
              "Integrated filters for efficient product categorization and search",
          },
        ],
      },
    ],
    challenges:
      "Balancing dynamic content creation with Shopify Liquid, optimizing the site for performance, and ensuring a consistent and visually appealing design.",
    solution:
      "Leveraged the flexibility of Shopify Liquid for dynamic content, optimized images and assets for performance, and maintained a consistent design language throughout the website.",
    results:
      "Spartx Dev E-commerce delivers a visually appealing, responsive, and user-friendly online shopping experience. Positive feedback emphasizes the site's dynamic features, seamless checkout process, and overall design aesthetics.",
    learnings:
      "Enhanced skills in front-end development with Shopify Liquid, improved proficiency in responsive design, and gained insights into creating a seamless e-commerce user experience.",
    futureImprovements:
      "Considering future enhancements, such as implementing customer accounts, integrating additional payment gateways, and expanding product categories.",
  },
  {
    id: 4,
    name: "Laundry Application",
    image: LaundryImage.src,
    technology:
      "React Native, Firebase (Authentication, Firestore), JavaScript & Redux Toolkit",
    role: "Full Stack Mobile Developer",
    description:
      "Developed LaundryPal, a cutting-edge laundry application using React Native and Firebase. The app seamlessly integrates features such as user profiles, order history, date picking for delivery, and automatic location detection. LaundryPal offers users a convenient and efficient way to manage their laundry needs with a user-friendly interface.",
    keyFeatures: [
      {
        id: 1,
        feature: "User Profiles",
      },
      {
        id: 2,
        feature: "Order Management",
      },
      {
        id: 3,
        feature: "Date Picking",
      },
      {
        id: 4,
        feature: "Automatic Location Detection",
      },
    ],
    github: "https://github.com/developervinay1/React-Native-LaundryApp",
    websiteURL: "https://google.com/",
    detailedFeatures: [
      {
        title: "User Profiles",
        features: [
          {
            title: "Personalized Profiles",
            description:
              "Users can create and manage their profiles with preferences, contact details, and delivery preferences.",
          },
          {
            title: "Order History",
            description:
              "Accessible from the profile, providing a detailed overview of past laundry orders.",
          },
        ],
      },
      {
        title: "Order Management",
        features: [
          {
            title: "Seamless Order Placement",
            description:
              "Users can effortlessly place orders with a simple and intuitive interface.",
          },
          {
            title: "Real-time Updates",
            description:
              "Receive real-time updates on order status, from pickup to delivery.",
          },
        ],
      },
      {
        title: "Date Picking",
        features: [
          {
            title: "Calender Integration",
            description:
              "Users can pick delivery dates using an integrated calendar feature.",
          },
          {
            title: "Schedule Flexibility",
            description:
              "Choose delivery times that suit their schedule for a personalized experience.",
          },
        ],
      },
      {
        title: "Automatic Location Detection",
        features: [
          {
            title: "Geolocation Api",
            description:
              "Automatically detects the user's location, simplifying the order process.",
          },
          {
            title: "Custom Location Input",
            description:
              "Users can manually input or adjust their delivery location for flexibility.",
          },
        ],
      },
    ],
    challenges:
      "Implementing seamless integration between React Native and Firebase for real-time updates, ensuring accurate location detection, and designing an intuitive user interface.",
    solution:
      "Leveraged React Native's capabilities to create a responsive and cross-platform application. Integrated Firebase for user authentication, Firestore for real-time data updates, and the Geolocation API for automatic location detection.",
    results:
      "LaundryPal successfully provides users with a streamlined laundry management experience. Positive feedback highlights the app's intuitive design, automatic location features, and efficient order tracking.",
    learnings:
      "Gained extensive experience in mobile app development using React Native, Firebase integration, and Geolocation API usage. Improved skills in creating responsive and user-friendly interfaces for on-the-go applications.",
    futureImprovements:
      "Planning to enhance LaundryPal by implementing additional features such as push notifications, in-app chat support, and more customization options for users.",
  },
  {
    id: 5,
    name: "CloudMedia Vault",
    image: CloudVaultImage.src,
    technology:
      "React Native, Firebase (Authentication, Cloud Storage), JavaScript",
    role: "Full-Stack Mobile Developer",
    description:
      "Developed CloudMedia Vault, a secure mobile application built with React Native and Firebase. The app provides users with a platform to securely store images and videos on the cloud, ensuring data privacy. It incorporates robust authentication features to guarantee a secure user experience.",
    keyFeatures: [
      {
        id: 1,
        feature: "User Authentication",
      },
      {
        id: 2,
        feature: "Cloud Media Storage",
      },
      {
        id: 3,
        feature: "User Friendly Interface",
      },
    ],
    github: "https://github.com/developervinay1/ImageUploaderApp-React-Native",
    detailedFeatures: [
      {
        title: "Authentication",
        features: [
          {
            title: "Secure Sign-Up/Login",
            description:
              "Users can create accounts or log in securely to access their private cloud storage",
          },
          {
            title: "Password Reset",
            description:
              "Implemented a password reset feature for user account recovery.",
          },
        ],
      },
      {
        title: "Cloud Media Storage",
        features: [
          {
            title: "Image Upload",
            description:
              "Users can easily upload and store images securely on the Firebase Cloud Storage.",
          },
          {
            title: "Video Upload",
            description:
              "Similar functionality for uploading and organizing video files in the cloud.",
          },
        ],
      },
      {
        title: "User-Friendly Interface",
        features: [
          {
            title: "Intuitive Dashboard",
            description:
              "A clean and user-friendly dashboard for easy navigation and media management.",
          },
          {
            title: "File Organization",
            description:
              "Users can organize and categorize their media files within the application.",
          },
        ],
      },
      {
        title: "Data Security",
        features: [
          {
            title: "Firebase Authentication",
            description:
              "Utilized Firebase Authentication to ensure secure user accounts.",
          },
          {
            title: "End-to-End Encryption",
            description:
              "Implemented encryption protocols for enhanced data security.",
          },
        ],
      },
    ],
    challenges:
      "Integrating secure user authentication with Firebase, implementing robust media upload functionality, and maintaining a user-friendly interface for seamless user experience.",
    solution:
      "Leveraged React Native for building a responsive cross-platform application. Integrated Firebase for secure user authentication and cloud storage functionalities. Prioritized user interface design for a smooth and intuitive experience.",
    results:
      "CloudMedia Vault provides users with a secure and user-friendly platform to store images and videos on the cloud. Positive feedback emphasizes the app's security measures and ease of use.",
    learnings:
      "Enhanced skills in React Native development, Firebase integration, and implementing secure authentication protocols. Gained insights into cloud storage management and data security for mobile applications.",
    futureImprovements:
      "Considering future enhancements, such as additional media management features, collaborative sharing options, and further security optimizations.",
  },
  {
    id: 6,
    name: "Thread Clone",
    image: ThreadsImage.src,
    technology:
      "React Native, Firebase (Authentication, Firestore, Storage), JavaScript",
    role: "Full-stack Mobile Developer",
    description:
      "Developed Threads Clone, a robust social media application using React Native and Firebase. This mobile app empowers users to create accounts, connect by following each other, upload posts, and manage personalized profile pages. Threads Clone provides a seamless and engaging platform for social interactions on the go.",
    keyFeatures: [
      {
        id: 1,
        feature: "USer Authentication",
      },
      {
        id: 2,
        feature: "Social Connections",
      },
      {
        id: 3,
        feature: "Post Management",
      },
      {
        id: 4,
        feature: "Profile Pages",
      },
    ],
    github: "https://github.com/developervinay1/ThreadsClone-RN",
    detailedFeatures: [
      {
        title: "User Authentication",
        features: [
          {
            title: "Secure Account Creation",
            description:
              "Users can securely create accounts with Firebase Authentication.",
          },
          {
            title: "Profile Verification",
            description:
              "Implemented authentication measures for secure user identity.",
          },
        ],
      },
      {
        title: "Social Connections",
        features: [
          {
            title: "Follow/Unfollow",
            description:
              "Users can build connections by following and unfollowing other users.",
          },
          {
            title: "Activity Feed",
            description:
              "A real-time activity feed displaying posts from followed users.",
          },
        ],
      },
      {
        title: "Post management",
        features: [
          {
            title: "Media Upload",
            description:
              "Seamless image and post upload functionality for sharing moments.",
          },
          {
            title: "Interactive Management",
            description:
              "Users can like and comment on posts, fostering engagement.",
          },
        ],
      },
      {
        title: "Profile Pages",
        features: [
          {
            title: "Personalized Profiles",
            description:
              "Unique profile pages for users, showcasing their posts, followers, and following lists.",
          },
          {
            title: "Edit Profile",
            description:
              "Users have control over profile details and privacy settings.",
          },
        ],
      },
    ],
    challenges:
      "Ensuring real-time interactions, implementing secure image uploads, and creating an intuitive mobile user interface for a dynamic social experience.",
    solution:
      "Leveraged React Native for cross-platform mobile development and Firebase services for seamless data storage, authentication, and real-time updates. Focused on creating an intuitive UI for an engaging mobile experience.",
    results:
      "Threads Clone delivers an engaging social media experience on mobile devices, allowing users to connect, share, and interact on the go. Positive user feedback highlights the app's responsiveness and user-friendly design.",
    learnings:
      "Enhanced proficiency in mobile app development with React Native, Firebase integration for real-time updates, and secure user authentication. Gained insights into optimizing user interfaces for mobile interactions.",
    futureImprovements:
      "Considering future enhancements, such as direct messaging features, video uploads, and additional customization options to further elevate the Threads Clone user experience.",
  },
  {
    id: 7,
    name: "Stay Easy",
    image: Booking.src,
    technology:
      "React Native, Firebase (Authentication, Firestore), JavaScript",
    role: "Full-stack Mobile Developer",
    description:
      "Created StayEasy, an intuitive hotel booking application using React Native and Firebase. This mobile app streamlines the hotel reservation process, offering users authentication features, the ability to bookmark favorite places, and a convenient booking system for planning their stays.",
    keyFeatures: [
      {
        id: 1,
        feature: "User Authentication",
      },
      {
        id: 2,
        feature: "Hotel Booking System",
      },
      {
        id: 3,
        feature: "Bookmarking System",
      },
      {
        id: 4,
        feature: "User Profile",
      },
    ],
    github: "https://github.com/developervinay1/BookingApp-RN",
    detailedFeatures: [
      {
        title: "User Authentication",
        features: [
          {
            title: "Secure Sign-Up/Login",
            description:
              "Users can create accounts securely and log in with personalized credentials.",
          },
          {
            title: "Social Sign-In",
            description:
              "Implemented options for users to sign in using their Google or Facebook accounts.",
          },
        ],
      },
      {
        title: "Hotel Booking System",
        features: [
          {
            title: "Browser and Discover",
            description:
              "Users can explore a variety of hotels, filter by preferences, and view detailed information about each place",
          },
          {
            title: "Booking System",
            description:
              "A seamless booking system allows users to reserve hotel rooms for their desired dates.",
          },
        ],
      },
      {
        title: "Bookmarking System",
        features: [
          {
            title: "Favourite Place",
            description:
              "Users can bookmark hotels they like for easy access later.",
          },
          {
            title: "Bookmark Management",
            description:
              "A dedicated section for managing bookmarked places, making it convenient for future bookings.",
          },
        ],
      },
      {
        title: "User Profiles",
        features: [
          {
            title: "Personalized Profiles",
            description:
              "Each user has a unique profile with booking history and bookmarked places.",
          },
          {
            title: "Edit Profiles",
            description:
              "Users can customize their profiles, update preferences, and manage account details.",
          },
        ],
      },
    ],
    challenges:
      "Implementing a secure booking system, integrating Firebase for real-time updates, and creating an efficient bookmarking system for user convenience.",
    solution:
      "Leveraged React Native for a cross-platform mobile application, integrated Firebase for authentication and Firestore for seamless data storage. Focused on creating an intuitive user interface for an optimal booking experience.",
    results:
      "StayEasy offers users a hassle-free hotel booking experience with secure authentication, a user-friendly interface, and convenient bookmarking features. Positive feedback highlights the app's responsiveness and ease of use.",
    learnings:
      "Enhanced proficiency in mobile app development using React Native, integrated real-time updates with Firebase, and improved skills in creating efficient booking and bookmarking systems.",
    futureImprovements:
      "Considering future enhancements, such as additional search filters, personalized recommendations, and integration with payment gateways for seamless transactions.",
  },
  {
    id: 8,
    name: "Bubble Game",
    image: BubbleImage.src,
    technology: "Html, Css and Javascript",
    role: "Front-end Developer",
    description:
      "Designed BubblePop, a captivating web game using HTML, CSS, and JavaScript, introducing an innovative bubble event concept for dynamic interactivity. The game offers users an engaging bubble-popping experience with responsive design. Positive user feedback and increased interaction highlight its success. Future plans involve expanding the game with additional levels and social features for a more enriched gaming community.",
    keyFeatures: [
      {
        id: 1,
        feature: "Simple Design",
      },

      {
        id: 2,
        feature: "Javascript event bubbling",
      },
    ],
    github:
      "https://github.com/developervinay1/Javascript-Project-Bubble-Game/tree/main",
    websiteURL: "https://bubble-game-vinay.netlify.app/",
    detailedFeatures: [
      {
        title: "Dynamic Animation",
        features: [
          {
            title: "Animation",
            description: "Interactive bubble popping with dynamic animations",
          },
        ],
      },
      {
        title: "Responsive Design",
        features: [
          {
            title: "Cross-Device Support",
            description:
              "Responsive design for seamless gameplay on various devices",
          },
        ],
      },
      {
        title: "Timer and Score",
        features: [
          {
            title: "Hit and Score",
            description: "Get score after each hit",
          },
        ],
      },
    ],
    challenges:
      "Implementing the bubble event concept for an immersive and responsive gaming environment.",
    solution:
      "Utilized JavaScript to create a dynamic bubble-popping experience, enhancing user interactivity and enjoyment.",
    results:
      "Achieved positive user feedback for the entertaining gaming experience and increased user interaction. ",
    learnings:
      "Enhanced proficiency in JavaScript event handling and improved skills in creating engaging user interfaces for online games.",
    futureImprovements:
      "Planning to incorporate additional game levels, challenges, and social sharing features for an enriched gaming community.",
  },
  {
    id: 9,
    name: "Zomato Clone",
    image: ZomatoImage.src,
    technology:
      "React.js, Firebase (Authentication, Realtime Database), HTML, CSS",
    role: "Full Stack Developer",
    description:
      "Introducing Zomato Clone, a React.js and Firebase-powered Zomato clone that seamlessly blends user authentication with dynamic data filtering on the product page. This user-friendly platform delivers a personalized dining experience, showcasing my skills in full-stack development. Positive user engagement underscores the success of this project, with future plans to enhance features such as order tracking and social sharing for an elevated dining journey.",
    keyFeatures: [
      {
        id: 1,
        feature: "User Authentication",
      },
      {
        id: 2,
        feature: "Data Filtering On Product Page",
      },
      {
        id: 3,
        feature: "Responsive Design",
      },
    ],
    websiteURL: "https://zomato-clone-p1.netlify.app/",
    detailedFeatures: [
      {
        title: "Firebase Authentication",
        features: [
          {
            title: "User Sign-up/Login",
            description: "User authentication for personalized profiles",
          },
        ],
      },
      {
        title: "Data filtering",
        features: [
          {
            title: "Products Filtering",
            description: "Advanced data filtering on the product page",
          },
        ],
      },
      {
        title: "Responsive Design",
        features: [
          {
            title: "Cross-Device Support",
            description: "Responsive design for all devices.",
          },
        ],
      },
    ],
    challenges:
      "Implementing secure user authentication and optimizing data filtering for a smooth product browsing experience.",
    solution:
      "Leveraged React.js for dynamic front-end development and Firebase services for secure authentication and real-time data updates.",
    results:
      "Successfully created a user-friendly dining platform with enhanced data filtering, resulting in positive user engagement.",
    learnings:
      "Gained expertise in integrating Firebase services for user authentication and real-time data management, contributing to improved full-stack development skills.",
    futureImprovements:
      "Planning to expand features, including order tracking and social sharing options, to elevate the user dining experience.",
  },
];
