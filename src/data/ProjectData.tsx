import Booking from "@/assets/mockups/Booking.png";
import BubbleImage from "@/assets/mockups/BubbleGame.png";
import Daily1BlogImage from "@/assets/mockups/Daily1Blog.png";
import GOOGLEDOCSIMAGE from "@/assets/mockups/GoogleDocs.png";
import JobFinderAppImage from "@/assets/mockups/JobFinderApp.png";
import LaundryImage from "@/assets/mockups/Laundry.png";
import CloudVaultImage from "@/assets/mockups/MediaCloud.png";
import NetflixImage from "@/assets/mockups/Netflix.png";
import MIHUIMAGE from "@/assets/mockups/Shopping.png";
import SpartxImage from "@/assets/mockups/SpartxDev.png";
import SpotifyCloneImage from "@/assets/mockups/SpotifyClone.png";
import SWIFTUISPOTIFYCLONEIMAGE from "@/assets/mockups/SpotifyUISwift.png";
import SyncShareImage from "@/assets/mockups/SyncShare.png";
import THOUGHTWAVEIMAGE from "@/assets/mockups/ThoughtWave.png";
import ThreadsImage from "@/assets/mockups/ThreadsClone.png";
import THREADSUISWIFTUICLONE from "@/assets/mockups/ThreadsUIIOS.png";
import VMCHAT from "@/assets/mockups/VmChatApplication.png";
import ZomatoImage from "@/assets/mockups/Zomato.png";
// Image Check

type projectDataProps = {
  id: number;
  name: string;
  image: string;
  technology: string;
  role: string;
  description: string;
  type: "website" | "mobileApp" | "backend" | "swiftUI";
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
    id: 2,
    name: "Daily1Blog",
    image: Daily1BlogImage.src,
    technology: "React Js Firebase",
    role: "Full Stack Web Developer",
    description:
      "Developed Daily1Blog, a dynamic blogging website using React.js and Firebase. This platform allows users to explore and read a variety of blog posts. With integrated user authentication, logged-in users gain the additional capability to contribute to the platform by uploading their own blog posts.",
    type: "website",
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
    websiteURL: "https://daily1blog.netlify.app/",
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
    id: 2025,
    name: "Thoughtwave",
    image: THOUGHTWAVEIMAGE.src,
    technology: "Next.js, TypeScript, Firebase, Tailwind CSS, MongoDB",
    role: "Full Stack Developer",
    description:
      "Thoughtwave is a dynamic social media platform built using Next.js, TypeScript, and Firebase. It offers users an Instagram-like feed, robust search functionality, and advanced features like following/unfollowing users, private/public profile settings, and separate pages for followers and followings. Designed to foster community and engagement, Thoughtwave delivers an intuitive and seamless social media experience.",
    type: "website",
    keyFeatures: [
      {
        id: 1,
        feature: "User Authentication and Profiles",
      },
      {
        id: 2,
        feature: "Feed with Posts, Comments, and Likes",
      },
      {
        id: 3,
        feature: "Follow/Unfollow and Search Functionality",
      },
    ],
    github: "https://github.com/Vinaypartap-Singh/Thought-Wave",
    websiteURL: "https://www.thoughtwave.live/",
    detailedFeatures: [
      {
        title: "User Authentication and Profiles",
        features: [
          {
            title: "Authentication",
            description: "Supports secure login and registration for users.",
          },
          {
            title: "Public/Private Profiles",
            description:
              "Allows users to toggle their profile visibility as public or private.",
          },
        ],
      },
      {
        title: "Feed with Posts, Comments, and Likes",
        features: [
          {
            title: "Instagram-like Feed",
            description:
              "Displays a real-time feed of posts from followed users and public profiles.",
          },
          {
            title: "Engagement Features",
            description: "Supports liking, commenting, and sharing posts.",
          },
        ],
      },
      {
        title: "Follow/Unfollow and Search Functionality",
        features: [
          {
            title: "Search Users",
            description: "Enables users to search for other users by username.",
          },
          {
            title: "Follow/Unfollow",
            description:
              "Allows users to follow or unfollow other users seamlessly.",
          },
          {
            title: "Followers/Followings Pages",
            description:
              "Provides separate pages for users to view their followers and followings.",
          },
        ],
      },
    ],
    challenges:
      "Implementing real-time updates for the feed and managing private/public profile settings.",
    solution:
      "Utilized Firebase for real-time database functionality and authentication. Leveraged Next.js for server-side rendering and MongoDB for efficient data storage. Tailwind CSS was used for creating a responsive and user-friendly UI.",
    results:
      "Successfully launched Thoughtwave, a fully functional social media platform, enhancing user engagement and providing a seamless user experience.",
    learnings:
      "Gained expertise in building scalable social media platforms, real-time data synchronization, and user privacy controls.",
    futureImprovements:
      "Planning to add features like stories, notifications, and AI-based content recommendations to enhance user engagement and retention.",
  },
  {
    id: 2024,
    name: "Google Docs Clone",
    image: GOOGLEDOCSIMAGE.src,
    technology: "React.js, Firebase, Tailwind CSS, Quill.js",
    role: "Full Stack Developer",
    description:
      "Google Docs Clone is a collaborative document creation and editing platform built using React.js and Firebase. It allows users to create an account, manage their documents, and edit them in real-time with an intuitive interface. The app offers seamless data synchronization, ensuring that user changes are saved instantly.",
    type: "website",
    keyFeatures: [
      {
        id: 1,
        feature: "User Authentication",
      },
      {
        id: 2,
        feature: "Real-time Document Editing",
      },
      {
        id: 3,
        feature: "Document Management",
      },
    ],
    github: "https://github.com/Vinaypartap-Singh/docs-nextjs-api-prisma",
    websiteURL: "https://docs-nextjs-vinay.vercel.app/document",
    detailedFeatures: [
      {
        title: "User Authentication",
        features: [
          {
            title: "Secure Login and Registration",
            description: "Provides secure authentication using Firebase.",
          },
          {
            title: "Account Management",
            description:
              "Allows users to manage their account details and view their documents.",
          },
        ],
      },
      {
        title: "Real-time Document Editing",
        features: [
          {
            title: "Rich Text Editor",
            description:
              "Enables users to edit documents with formatting options using Quill.js.",
          },
          {
            title: "Auto-save",
            description:
              "Ensures that all changes are automatically saved in real-time.",
          },
        ],
      },
      {
        title: "Document Management",
        features: [
          {
            title: "Create and Manage Documents",
            description:
              "Allows users to create new documents, rename them, and manage existing ones.",
          },
          {
            title: "Collaborative Editing (Future Feature)",
            description:
              "Plans to enable multiple users to edit a document simultaneously.",
          },
        ],
      },
    ],
    challenges:
      "Implementing real-time synchronization and creating a rich text editor with advanced formatting options.",
    solution:
      "Used Firebase Firestore for real-time database synchronization and Quill.js for an easy-to-use text editor. Tailwind CSS was employed to create a modern and responsive UI.",
    results:
      "Successfully developed a functional Google Docs Clone with real-time editing and robust document management capabilities, providing users with a simplified document creation experience.",
    learnings:
      "Improved skills in implementing real-time features and building user-friendly interfaces for document management applications.",
    futureImprovements:
      "Planning to add collaborative editing, version history, and integration with cloud storage services for enhanced functionality.",
  },
  {
    id: 20242,
    name: "Spotify UI Clone",
    image: SWIFTUISPOTIFYCLONEIMAGE.src,
    technology: "SwiftUI, Xcode",
    role: "iOS Developer",
    description:
      "Spotify UI Clone is an iOS application replicating the popular Spotify app's user interface. Built using SwiftUI, it includes Home, Search, and Library pages designed with attention to detail for an immersive user experience. The app demonstrates the capabilities of SwiftUI in crafting responsive and visually appealing UIs.",
    type: "swiftUI",
    keyFeatures: [
      {
        id: 1,
        feature: "Home Page UI",
      },
      {
        id: 2,
        feature: "Search Page UI",
      },
      {
        id: 3,
        feature: "Library Page UI",
      },
    ],
    github: "https://github.com/Vinaypartap-Singh/Spotify-Ui-SwiftUI-Clone",
    detailedFeatures: [
      {
        title: "Home Page UI",
        features: [
          {
            title: "Curated Content Layout",
            description:
              "Displays playlists, albums, and recently played items in a responsive grid layout.",
          },
          {
            title: "Dynamic Content Display",
            description:
              "Uses mock data to populate content similar to the original Spotify app.",
          },
        ],
      },
      {
        title: "Search Page UI",
        features: [
          {
            title: "Search Bar",
            description:
              "Includes a functional search bar for users to explore content.",
          },
          {
            title: "Category Grid",
            description:
              "Presents categories like Podcasts, Charts, and Genres with modern card designs.",
          },
        ],
      },
      {
        title: "Library Page UI",
        features: [
          {
            title: "User Library",
            description:
              "Displays user-specific playlists and saved music in a sleek and organized view.",
          },
          {
            title: "Responsive UI",
            description:
              "Adapts to different screen sizes for an optimized viewing experience.",
          },
        ],
      },
    ],
    challenges:
      "Recreating Spotify's intricate UI elements while ensuring responsiveness across iOS devices.",
    solution:
      "Leveraged SwiftUI's declarative syntax to build a clean and reusable component-based architecture. Focused on alignment, spacing, and responsiveness for pixel-perfect designs.",
    results:
      "Successfully delivered a visually stunning and highly responsive UI clone of Spotify's core pages, showcasing SwiftUI's flexibility and power.",
    learnings:
      "Enhanced proficiency in SwiftUI for designing complex UIs and gained valuable insights into building scalable UI architectures.",
    futureImprovements:
      "Planning to add functionality for user interaction, real-time data integration, and dark/light mode support to enrich the application further.",
  },
  {
    id: 20243,
    name: "Threads UI Clone",
    image: THREADSUISWIFTUICLONE.src,
    technology: "SwiftUI, Xcode",
    role: "iOS Developer",
    description:
      "Threads UI Clone is an iOS application that replicates the user interface of the Threads app by Instagram. Built entirely in SwiftUI, the project includes Home, Profile, and Search pages, designed with precision to reflect the minimalist and engaging design of the original app. It serves as a showcase of SwiftUI's capabilities in developing modern and interactive user interfaces.",
    type: "swiftUI",
    keyFeatures: [
      {
        id: 1,
        feature: "Home Page UI",
      },
      {
        id: 2,
        feature: "Profile Page UI",
      },
      {
        id: 3,
        feature: "Search Page UI",
      },
    ],
    github: "https://github.com/Vinaypartap-Singh/Threads-Clone-IOS-Swift",
    detailedFeatures: [
      {
        title: "Home Page UI",
        features: [
          {
            title: "Thread Feed Layout",
            description:
              "Displays a feed of posts in a clean and visually appealing timeline layout.",
          },
          {
            title: "Interactive Elements",
            description:
              "Includes mock buttons for liking, commenting, and reposting.",
          },
        ],
      },
      {
        title: "Profile Page UI",
        features: [
          {
            title: "User Bio and Metrics",
            description:
              "Presents user information like profile picture, bio, follower count, and following count.",
          },
          {
            title: "Thread Display",
            description:
              "Displays user-created threads in a grid or list view, similar to the original app.",
          },
        ],
      },
      {
        title: "Search Page UI",
        features: [
          {
            title: "Search Bar",
            description:
              "Includes a functional search bar for exploring content.",
          },
          {
            title: "Suggested Profiles",
            description:
              "Displays mock profiles and trending threads in a modern card design.",
          },
        ],
      },
    ],
    challenges:
      "Recreating the smooth transitions and clean aesthetic of Threads while ensuring responsiveness across iOS devices.",
    solution:
      "Leveraged SwiftUI's reusable components and declarative syntax to create a dynamic, scalable UI structure. Focused on typography, alignment, and spacing for an authentic Threads experience.",
    results:
      "Delivered a pixel-perfect UI clone of Threads' core pages, demonstrating SwiftUI's strengths in building elegant and responsive designs.",
    learnings:
      "Gained expertise in replicating complex UI structures with SwiftUI and honed skills in creating reusable components for large-scale designs.",
    futureImprovements:
      "Planning to add interactive features, live data integration, and enhanced animations to further align the clone with the functionality of the original Threads app.",
  },
  {
    id: 8,
    name: "Stay Easy",
    image: Booking.src,
    technology:
      "React Native, Firebase (Authentication, Firestore), JavaScript",
    role: "Full-stack Mobile Developer",
    description:
      "Created StayEasy, an intuitive hotel booking application using React Native and Firebase. This mobile app streamlines the hotel reservation process, offering users authentication features, the ability to bookmark favorite places, and a convenient booking system for planning their stays.",
    type: "mobileApp",
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
    github: "https://github.com/Vinaypartap-Singh/BookingApp-RN",
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
    id: 7,
    name: "Thread Clone",
    image: ThreadsImage.src,
    technology:
      "React Native, Firebase (Authentication, Firestore, Storage), JavaScript",
    role: "Full-stack Mobile Developer",
    description:
      "Developed Threads Clone, a robust social media application using React Native and Firebase. This mobile app empowers users to create accounts, connect by following each other, upload posts, and manage personalized profile pages. Threads Clone provides a seamless and engaging platform for social interactions on the go.",
    type: "mobileApp",
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
    github: "https://github.com/Vinaypartap-Singh/ThreadsClone-RN",
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
    id: 14,
    name: "VMChat",
    image: VMCHAT.src,
    technology:
      "React Native, Firebase (Realtime Status, Authentication, Realtime Data)",
    role: "Mobile App Developer",
    description:
      "VMChat is a chat application developed using React Native with Firebase integration. Users can create accounts and engage in chat conversations. The app includes room functionality, allowing users to join different chat rooms based on their interests or topics.",
    type: "mobileApp",
    keyFeatures: [
      {
        id: 1,
        feature: "Account Creation",
      },
      {
        id: 2,
        feature: "Chat Rooms",
      },
      {
        id: 3,
        feature: "Real-time Messaging",
      },
      {
        id: 4,
        feature: "Firebase Integration",
      },
    ],
    github: "https://github.com/Vinaypartap-Singh/Chat-App-RN",
    detailedFeatures: [
      {
        title: "Real-time Messaging",
        features: [
          {
            title: "Instant Messaging",
            description:
              "Messages are sent and received instantly in real-time, ensuring quick communication.",
          },
          {
            title: "Message Delivery Status",
            description:
              "Users can see the delivery status of their messages, such as delivered or read.",
          },
        ],
      },
      {
        title: "Firebase Integration",
        features: [
          {
            title: "Authentication",
            description:
              "Firebase Authentication is used to authenticate users securely.",
          },
          {
            title: "Realtime Database",
            description:
              "Firebase Realtime Database is utilized for storing and synchronizing chat messages in real-time.",
          },
        ],
      },
      {
        title: "Last Seen and Online",
        features: [
          {
            title: "Realtime User Status",
            description:
              "User last seen and online is visible in realtime with the Time.",
          },
        ],
      },
    ],
    challenges: "Creating rooms in Firebase.",
    solution:
      "Rooms are created by sorting the IDs of the logged-in user and the clicked user, ensuring unique and identifiable chat rooms.",
    results:
      "Successfully implemented room creation functionality, enabling users to engage in chat conversations seamlessly.",
    learnings:
      "Learned about sorting algorithms and the importance of creating unique identifiers for chat rooms. Gained insights into implementing chat functionality within Firebase Realtime Database.",
    futureImprovements:
      "Implement additional features such as multimedia messaging (images, videos). Enhance user experience with features like message notifications. Improve security features such as end-to-end encryption for messages. Implement user profile customization options.Enhance room management functionalities such as moderation tools.",
  },
  {
    id: 12,
    name: "SyncShare",
    image: SyncShareImage.src,
    technology:
      "React.js, Node.js, Express.js, MongoDB, Firebase (Authentication), HTML, CSS",
    role: "Full Stack Developer",
    description:
      "Introducing SyncShare, a file sharing website developed using React.js, Node.js, Express.js, MongoDB, and Firebase for authentication. With SyncShare, users can securely upload and share files with anyone, anywhere. The platform offers advanced features such as file protection with passwords, ensuring data privacy and security. The intuitive user interface enhances the sharing experience, making SyncShare a go-to platform for seamless file exchange.",
    type: "website",
    keyFeatures: [
      {
        id: 1,
        feature: "Secure File Upload",
      },
      {
        id: 2,
        feature: "Password Protection",
      },
      {
        id: 3,
        feature: "User Authentication",
      },
    ],
    websiteURL: "https://sync-sharing.netlify.app",
    detailedFeatures: [
      {
        title: "Secure File Upload",
        features: [
          {
            title: "Encrypted Uploads",
            description: "Ensures data security during file transfer.",
          },
          {
            title: "File Size Limit",
            description:
              "Allows users to upload files within specified size limits.",
          },
        ],
      },
      {
        title: "Password Protection",
        features: [
          {
            title: "File Encryption",
            description:
              "Provides option to encrypt files with passwords for added security.",
          },
          {
            title: "Password Management",
            description: "Allows users to manage passwords for shared files.",
          },
        ],
      },
      {
        title: "User Authentication",
        features: [
          {
            title: "Firebase Authentication",
            description:
              "Integration of Firebase authentication for secure user accounts.",
          },
          {
            title: "Profile Creation",
            description: "Enables users to create and manage their profiles.",
          },
        ],
      },
    ],
    challenges:
      "Implementing secure file upload and integrating password protection functionality.",
    solution:
      "Leveraged Node.js and Express.js for backend development, integrating with MongoDB for efficient data storage. Utilized Firebase for user authentication to ensure secure access to the platform. Employed React.js for dynamic front-end development, providing users with an intuitive interface.",
    results:
      "Successfully developed SyncShare, a reliable file sharing platform with robust security features, ensuring user privacy and data protection.",
    learnings:
      "Gained expertise in implementing file upload functionality and integrating password protection, further enhancing my skills in full-stack development.",
    futureImprovements:
      "Planning to enhance SyncShare with features such as file expiration dates and user access controls, to provide users with more control over their shared files.",
  },
  {
    id: 13,
    name: "Spotify Clone",
    image: SpotifyCloneImage.src,
    technology: "Next.js, TypeScript, Supabase, HTML, CSS",
    role: "Full Stack Developer",
    description:
      "Presenting Spotify Clone, a music streaming platform developed using Next.js, TypeScript, and Supabase. With Spotify Clone, users can enjoy their favorite music, upload their own songs, and create playlists. The integration with Supabase ensures seamless data management and user authentication. The platform's intuitive design and robust functionality provide users with an immersive music listening experience, making Spotify Clone a top choice for music enthusiasts.",
    type: "website",
    keyFeatures: [
      {
        id: 1,
        feature: "Music Streaming",
      },
      {
        id: 2,
        feature: "Song Upload",
      },
      {
        id: 3,
        feature: "Playlist Management",
      },
    ],
    github: "https://github.com/Vinaypartap-Singh/Spotify-Clone",
    detailedFeatures: [
      {
        title: "Music Streaming",
        features: [
          {
            title: "Seamless Playback",
            description: "Provides uninterrupted music streaming experience.",
          },
          {
            title: "Search and Discover",
            description: "Allows users to search and discover new music.",
          },
        ],
      },
      {
        title: "Song Upload",
        features: [
          {
            title: "Upload Your Songs",
            description:
              "Enables users to upload their own songs to the platform.",
          },
          {
            title: "Metadata Management",
            description: "Allows users to manage metadata for uploaded songs.",
          },
        ],
      },
      {
        title: "Playlist Management",
        features: [
          {
            title: "Create Playlists",
            description: "Enables users to create and manage playlists.",
          },
          {
            title: "Liked Playlist",
            description:
              "Allows users to add songs to a liked playlist for easy access.",
          },
        ],
      },
    ],
    challenges:
      "Implementing seamless music streaming and integrating song upload functionality.",
    solution:
      "Utilized Next.js for server-side rendering and TypeScript for type safety. Integrated with Supabase for efficient data storage and user authentication. Leveraged CSS for designing an intuitive user interface.",
    results:
      "Successfully developed Spotify Clone, a feature-rich music streaming platform with robust functionality, resulting in enhanced user engagement and satisfaction.",
    learnings:
      "Acquired expertise in implementing music streaming functionality and managing user-generated content, further honing my skills in full-stack development.",
    futureImprovements:
      "Planning to enhance Spotify Clone with features such as personalized recommendations and social sharing options, to provide users with a more personalized music experience.",
  },
  {
    id: 1,
    name: "JobFinder App",
    image: JobFinderAppImage.src,
    technology: "React Native Firebase",
    role: "Full Stack Mobile App Developer",
    description:
      "Developed a comprehensive JobFinder application using React Native and Firebase. This app facilitates job posting for recruiters and job applications for freelancers. Both recruiters and freelancers have dedicated profile pages, and freelancers can upload their resumes while creating their profiles.",
    type: "mobileApp",
    keyFeatures: [
      {
        id: 1,
        feature: "Job Posting and Application",
      },
      {
        id: 2,
        feature: "Profile Management",
      },
      {
        id: 3,
        feature: "Resume Upload",
      },
      {
        id: 4,
        feature: "Real-time Communication",
      },
    ],
    github: "https://github.com/Vinaypartap-Singh/JobFinderApp-React-Native",
    detailedFeatures: [
      {
        title: "Job Posting and Application",
        features: [
          {
            title: "Recruiter Job Posting",
            description:
              "Recruiters can post job openings with detailed descriptions.",
          },
          {
            title: "Freelancer Job Application",
            description: "Freelancers can apply to jobs posted by recruiters.",
          },
        ],
      },
      {
        title: "Profile Management",
        features: [
          {
            title: "Recruiter Profile",
            description:
              "Recruiters have profiles to manage their job postings.",
          },
          {
            title: "Freelancer Profile",
            description:
              "Freelancers have profiles with resume upload functionality.",
          },
        ],
      },
      {
        title: "Real-time Communication",
        features: [
          {
            title: "Chat functionality",
            description:
              "Real-time communication between recruiters and freelancers.",
          },
          {
            title: "Notification System",
            description:
              "Instant notifications for job applications and updates.",
          },
        ],
      },
    ],
    challenges:
      "Balancing real-time communication with app performance, implementing a user-friendly profile creation process, and ensuring secure handling of resumes and personal information.",
    solution:
      "Utilized React Native for cross-platform mobile development and Firebase for real-time database functionality. Implemented secure authentication measures and designed an intuitive UI for optimal user experience.",
    results:
      "The JobFinder app streamlines the job search and hiring process, providing a user-friendly platform for recruiters and freelancers. Positive feedback highlights the app's smooth navigation, real-time communication features, and secure profile management.",
    learnings:
      "Enhanced skills in mobile app development, gained proficiency in real-time communication implementation, and deepened understanding of secure data handling.",
    futureImprovements:
      "Considering future enhancements, such as expanding communication features, refining the job matching algorithm, and incorporating additional customization options for user profiles.",
  },

  {
    id: 3,
    name: "Netflix App Clone",
    image: NetflixImage.src,
    technology: "React Native & Firebase",
    role: "Full Stack Development",
    type: "mobileApp",
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
    github: "https://github.com/Vinaypartap-Singh/NetflixApp-RN",
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
    id: 4,
    name: "Spartx Dev",
    image: SpartxImage.src,
    technology: "Front-End Development, Shopify Liquid",
    role: "Front-end Web Developer",
    description:
      "Built Spartx Dev, a robust e-commerce website from the ground up, utilizing Shopify Liquid for dynamic content and templating. This project seamlessly integrates HTML, CSS, and JavaScript to create a visually appealing and user-friendly online shopping experience.",
    type: "website",
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
    id: 5,
    name: "Laundry Application",
    image: LaundryImage.src,
    technology:
      "React Native, Firebase (Authentication, Firestore), JavaScript & Redux Toolkit",
    role: "Full Stack Mobile Developer",
    description:
      "Developed LaundryPal, a cutting-edge laundry application using React Native and Firebase. The app seamlessly integrates features such as user profiles, order history, date picking for delivery, and automatic location detection. LaundryPal offers users a convenient and efficient way to manage their laundry needs with a user-friendly interface.",
    type: "mobileApp",
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
    github: "https://github.com/Vinaypartap-Singh/React-Native-LaundryApp",
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
    id: 6,
    name: "CloudMedia Vault",
    image: CloudVaultImage.src,
    technology:
      "React Native, Firebase (Authentication, Cloud Storage), JavaScript",
    role: "Full-Stack Mobile Developer",
    description:
      "Developed CloudMedia Vault, a secure mobile application built with React Native and Firebase. The app provides users with a platform to securely store images and videos on the cloud, ensuring data privacy. It incorporates robust authentication features to guarantee a secure user experience.",
    type: "mobileApp",
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
    github:
      "https://github.com/Vinaypartap-Singh/ImageUploaderApp-React-Native",
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
    id: 9,
    name: "Bubble Game",
    image: BubbleImage.src,
    technology: "Html, Css and Javascript",
    role: "Front-end Developer",
    description:
      "Designed BubblePop, a captivating web game using HTML, CSS, and JavaScript, introducing an innovative bubble event concept for dynamic interactivity. The game offers users an engaging bubble-popping experience with responsive design. Positive user feedback and increased interaction highlight its success. Future plans involve expanding the game with additional levels and social features for a more enriched gaming community.",
    type: "website",
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
      "https://github.com/Vinaypartap-Singh/Javascript-Project-Bubble-Game/tree/main",
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
    id: 10,
    name: "Zomato Clone",
    image: ZomatoImage.src,
    technology:
      "React.js, Firebase (Authentication, Realtime Database), HTML, CSS",
    role: "Full Stack Developer",
    description:
      "Introducing Zomato Clone, a React.js and Firebase-powered Zomato clone that seamlessly blends user authentication with dynamic data filtering on the product page. This user-friendly platform delivers a personalized dining experience, showcasing my skills in full-stack development. Positive user engagement underscores the success of this project, with future plans to enhance features such as order tracking and social sharing for an elevated dining journey.",
    type: "website",
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
  {
    id: 12098,
    name: "MIHU Backend",
    image: MIHUIMAGE.src,
    technology: "Node.js, Express.js, MongoDB, JWT",
    role: "Backend Developer",
    description:
      "Backend for MIHU focusing on secure authentication with OTP verification and user profile customization.",
    type: "backend",
    keyFeatures: [
      { id: 1, feature: "Authentication" },
      { id: 2, feature: "Email OTP Verification" },
      { id: 3, feature: "Navigation Management" },
      { id: 4, feature: "Social Media Links" },
      { id: 5, feature: "Logo Upload" },
    ],
    detailedFeatures: [
      {
        title: "Authentication Module",
        features: [
          {
            title: "Email OTP",
            description:
              "Verification via OTP sent to user’s email for secure access.",
          },
        ],
      },
      {
        title: "Profile Management",
        features: [
          {
            title: "Custom Social Links",
            description: "Add and manage social media links for branding.",
          },
          {
            title: "Logo Upload",
            description: "Upload a custom logo for user profiles.",
          },
        ],
      },
    ],
    challenges:
      "Ensuring that OTPs (One-Time Passwords) are both generated and verified securely. This includes generating unique OTPs, setting expiration times, and preventing reuse to minimize security risks. Additionally, the challenge includes handling situations where users may request multiple OTPs in a short timeframe.Allowing users to update and manage their social media links in real-time without impacting performance or requiring additional backend intervention. This involves designing a flexible data structure and implementing efficient update methods to handle user-specific link management.",
    solution:
      "Leveraging Node.js provides a scalable environment for handling authentication processes and user management efficiently. Node.js is ideal for real-time applications, enabling quick data handling and responsive API services.MongoDB's document-oriented structure supports dynamic data needs, such as user-specific fields for social media links and branding information. MongoDB’s schema-less nature also allows for flexible modifications as the project grows.",
    results:
      "With secure OTP validation, users benefit from a safer, two-factor authentication experience that helps protect against unauthorized access.Users can personalize their profiles by adding logos and social media links, creating a unique and professional online presence.",
    learnings:
      "Working through the OTP verification process improved knowledge of secure authentication flows and error handling.Gained insights into securing user data, especially in the context of link updates and personal branding data, as well as managing expiration for time-sensitive tokens.",
    futureImprovements:
      "Adding a customizable hero section and additional branding sections will allow users to create a more engaging experience. This feature would include options for uploading custom backgrounds, headings, and descriptions for a personalized touch.Including more layout control for sections like About, Testimonials, or Services would empower users to build a profile page more aligned with their brand.",
    github: "https://github.com/Vinaypartap-Singh/MIHU_BACKEND",
  },
];
