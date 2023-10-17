import images from './images';

const Menu = [
    {
        text: 'About us',
        link: '#team',
    },
    {
        text: 'Services',
        link: '#services',
    },
    {
        text: 'Pet Training Hacks',
        link: '#use-cases',
    },
    {
        text: 'Process',
        link: '#process',
    },

    {
        text: 'Testimonials',
        link: '#testimonials',
    },
    {
        text: 'Request a quote',
        link: '#quote',
    }
];
const ServicesData = [
    {
        titleone: 'BASIC TRAINING TECHNIQUES:',
        text: 'Provide step-by-step guides on essential commands such as sit, stay, come, and heel. Include training videos demonstrating how to teach these commands effectively.',
        itemclass: 'blight',
        imgURL: images.services01,
    },
    {
        titleone: 'BEHAVORIAL ISSUES:',
        text: 'Discuss common behavioral problems like aggression, separation anxiety, excessive barking, or litter box issues.Provide insights into the underlying causes and tips.',
        itemclass: 'bgreen',
        imgURL: images.services02,
    },
    {
        titleone: 'PUPPY AND KITTEN TRAINING:',
        text: 'Offer specialized advice on training puppies and kittens, including potty training and socialization. Explain the importance of early training for long-term behavior.',
        itemclass: 'bdark',
        imgURL: images.services03,
    },
    {
        titleone: 'PET BODY LANGUAGE:',
        text: 'Educate pet owners about the body language of cats and dogs. Help readers understand their pets feelings, reactions and providing guidance for training pets with disabilities or special needs.',
        itemclass: 'blight',
        imgURL: images.services04,
    },
    {
        titleone: 'TRAINING TOOLS and EQUIPMENTS:',
        text: 'Recommend training tools like harnesses, leashes, and clickers. Explain how to use these tools safely and effectively.',
        itemclass: 'bgreen',
        imgURL: images.services06,
    },
    {
        titleone: 'BREED SPECIFIC TRAINING:',
        text: 'Offer insights into training approaches that work best for specific breeds. Highlight breed traits and behaviors during training.',
        itemclass: 'bdark',
        imgURL: images.services05,
    },
]
const CaseStudies = [
    {
        text: 'Positive Reinforcement: One of the most powerful training hacks is utilizing positive reinforcement, such as treats, praise, or toys, to reward and reinforce desired behaviors immediately. Whenever your pet exhibits the behavior you are trying to teach, promptly reward them. This encourages them to associate the action with a positive outcome.',
        link: '#',
    },
    {
        text: 'Clicker Training: Clicker training involves using a small, handheld device that makes a distinct clicking sound. This sound is used to mark the moment your pet performs the desired behavior. Associate the clicker sound with a reward (e.g., a treat). Click when your pet does the desired action and immediately follow with a reward. This clear signal helps them understand what behavior is being rewarded and helpful for teaching new commands or tricks.',
        link: '#',
    },
    {
        text: 'Routine and Consistency: Pets thrive on routines, so establishing a consistent daily training routine is vital for successful training. Schedule training sessions at the same time each day to create a sense of predictability and regularity for your pet. Consistency in commands, rewards, and expectations across all family members or caregivers is crucial to avoid confusing your pet.',
        link: '#',
    },
];

const WorkingProcess = [
    {
        title: 'Assessment and Consultation',
        description: 'Pet owners initiate the process by reaching out for an initial assessment and consultation. Conduct an assessment to understand the pets current behavior, any issues, and the owners goals for training.',
    },
    {
        title: 'Goal Setting',
        description: 'Collaborate with the pet owner to set clear, achievable training goals based on the assessment. Define specific behaviors to be addressed and the desired outcomes.',
    },
    {
        title: 'Customized Training Plan',
        description: 'Develop a customized training plan based on the assessment and goals set. Tailor the training plan to the pets species, breed, age, personality, and behavioral issues.',
    },
    {
        title: 'Training Sessions',
        description: 'Conduct regular training sessions based on the training plan. Employ various training techniques and positive reinforcement methods to achieve desired behavioral changes.',
    },
    {
        title: 'Monitoring and Progress Tracking',
        description: 'Continuously monitor the pets progress during and between training sessions. Document and track behavioral changes, identifying areas of improvement and any challenges faced.',
    },
    {
        title: 'Feedback and Communication',
        description: 'Maintain open communication with the pet owner, providing regular updates on the pets progress. Encourage feedback from the owner and address any concerns or questions.',
    },

];

const Team = [
    {
        name: 'Rudrani Chavarkar',
        position: 'Founder',
        info: ' Strong organizational and communication skills',
        linkedin: '#',
    },
    {
        name: 'Shreya Bagade',
        position: 'Founder',
        info: 'Expertise in SEO, PPC, and content strategy.',
        linkedin: '#',
    },
    {
        name: 'Sanika Ambre',
        position: 'Founder',
        info: 'Proficient in keyword research and on-page optimization',
        linkedin: '#',
    },
    {
        name: 'Shreya Kamath',
        position: 'Founder',
        info: 'Skilled in campaign management and performance analysis',
        linkedin: '#',
    },
    {
        name: 'Vijay Sharma',
        position: 'Training Specialist and Director of Operations',
        info: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
        linkedin: '#',
    },
    {
        name: 'Sarah Kim',
        position: 'Training Specialist',
        info: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
        linkedin: '#',
    },

];

const Testimonials = [
    {
        name: 'Tanishq Katkar',
        position: 'Andheri, Mumbai',
        testimonial: '"My pup was very aggressive , and used to be very destructive and bitting us too, Getting a trainer like Bharat sir has made the same boy most loving and now he is like a family member loving and caring for all of us. Would like to recommend Purrfect strongly."',
    },
    {
        name: 'Mrudula Verma',
        position: 'Dadar, Mumbai',
        testimonial: '"I have a very hyper active 9 months old golden retriever, who never used to take instructions from us. I am very happy with the training, my pet now follows our instructions. I am really grateful to Mr.Mahesh Bhosle for training our dog. I would highly recommend Mr. Mahesh Bhosle. He is one of the best dog trainers in town."',
    },
    {
        name: 'Salim Merchant',
        position: 'Wadala, Mumbai',
        testimonial: '"Guaranteed training. Great service and 100% results. The experience was great with the trainers from Purrfect. Worth spending the money for my dog training.We continue to engage with them to help socialize our puppy with other dogs."',
    },
    {
        name: 'Shawn Benny',
        position: 'Bandra, Mumbai',
        testimonial: '"Being a first time pet parent that too of a Rottweiler we would have not been able to manage if Purrfect was not there to guide us... He trained my boy (Diesel my Pet) so well and trained us as well to control him. Thank you for your guidance!"',
    },
];
export default { Menu, CaseStudies, WorkingProcess, Team, Testimonials, ServicesData };