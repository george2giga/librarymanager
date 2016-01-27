/// <reference path="../typings/meteor/meteor.d.ts"/>

Meteor.startup(function(){
    //     debugger;
    // console.log("stoca");
    if(Books.find().count() === 0){
        
        var data = [
            {
                title: "The Lean Startup",
                description: "The Lean Startup is a new approach to business that's being adopted around the world. It is changing the way companies are built and new products are launched.",
                author:"Eric Ries",
                isbn: "978-0670921607",
                cover_url: "51pGzMiWpnL.jpg",
                amazon_url: "http://www.amazon.co.uk/Lean-Startup-Innovation-Successful-Businesses/dp/0670921602",
                reserved: false
                                       
            },
            {
                title: "The Cucumber Book",
                description: "The Cucumber Book dives straight into the core of the problem: communication between people. Cucumber saves the day; it's a testing, communication, and requirements tool - all rolled into one.",
                author:"Aslak Hellesoy",
                isbn: "978-1934356807",
                cover_url: "51dKVQPJolL.jpg",      
                amazon_url: "http://www.amazon.co.uk/The-Cucumber-Book-Behaviour-Driven-Development/dp/1934356808",
                reserved: false         
            },
            {
                title: "User Stories Applied",
                description: "Thoroughly reviewed and eagerly anticipated by the agile community, User Stories Applied offers a requirements process that saves time, eliminates rework, and leads directly to better software.",
                author:"Mike Cohn",
                isbn: "978-0321205681",
                cover_url: "5139MMztLeL.jpg",
                amazon_url: "http://www.amazon.co.uk/User-Stories-Applied-Development-Signature/dp/0321205685",
                reserved: false               
            },
            {
                title: "Specification by example",
                description: "Specification by Example is an emerging practice for creating software based on realistic examples, bridging the communication gap between business stakeholders and the dev teams building the software. In this book, author Gojko Adzic distills interviews with successful teams worldwide, sharing how they specify, develop, and deliver software, without defects, in short iterative delivery cycles.",
                author:"Gojko Adzic",
                isbn: "978-1617290084",
                cover_url: "41yUI84ASzL.jpg",
                amazon_url: "http://www.amazon.co.uk/Specification-Example-Successful-Deliver-Software/dp/1617290084",
                reserved: false               
            },
            {
                title: "The Process Improvement Handbook",
                description: "Today’s business environment demands faster responses, better service, and increased agility. The Process Improvement Handbook reveals how to design effective process improvement structures, organizations, and cultures to meet those needs. Focusing on specific process improvement knowledge areas, this practical work establishes the foundation required to create, maintain, and measure processes while equipping practitioners with the necessary skills to deliver consistent, successful outcomes.",
                author:"Tristan Boutros, Tim Purdie",
                isbn: "978-0071817660",
                cover_url: "51SpGoTqafL.jpg",
                amazon_url: "http://www.amazon.co.uk/The-Process-Improvement-Handbook-Organizational/dp/0071817662",
                reserved: false               
            },
            {
                title: "Continuous Integration",
                description: "For any software developer who has spent days in “integration hell,” cobbling together myriad software components, Continuous Integration: Improving Software Quality and Reducing Risk illustrates how to transform integration from a necessary evil into an everyday part of the development process. The key, as the authors show, is to integrate regularly and often using continuous integration (CI) practices and techniques",
                author:"Paul M. Duvall, Steve Matyas, Andrew Glover",
                isbn: "978-0321336385",
                cover_url: "51EiswnBCBL.jpg",
                amazon_url: "http://www.amazon.co.uk/Continuous-Integration-Improving-Software-Signature/dp/0321336380",
                reserved: false               
            },
            {
                title: "Continuous Delivery",
                description: "Getting software released to users is often a painful, risky, and time-consuming process. This groundbreaking new book sets out the principles and technical practices that enable rapid, incremental delivery of high quality, valuable new functionality to users. Through automation of the build, deployment, and testing process, and improved collaboration between developers, testers, and operations, delivery teams can get changes released in a matter of hours―sometimes even minutes–no matter what the size of a project or the complexity of its code base",
                author:"Jez Humble, David Farley",
                isbn: "978-0321601919",
                cover_url: "51NbiDn81NL.jpg",
                amazon_url: "http://www.amazon.co.uk/Continuous-Delivery-Deployment-Automation-Addison-Wesley/dp/0321601912",
                reserved: false               
            },
            {
                title: "The Five Dysfunctions of a Team",
                description: "In The Five Dysfunctions of a Team Patrick Lencioni once again offers a leadership fable that is as enthralling and instructive as his first two best–selling books, The Five Temptations of a CEO and The Four Obsessions of an Extraordinary Executive. This time, he turns his keen intellect and storytelling power to the fascinating, complex world of teams.",
                author:"Patrick M. Lencioni",
                isbn: "978-0787960759",
                cover_url: "51Ko3ORh-qL.jpg",
                amazon_url: "http://www.amazon.co.uk/The-Five-Dysfunctions-Team-Leadership/dp/0787960756",
                reserved: false                
            },
            {
                title: "Clean Code",
                description: "Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.",
                author:"Robert C. Martin",
                isbn: "978-0132350884",
                cover_url: "51oXyW8WQwL.jpg",
                amazon_url: "http://www.amazon.co.uk/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
                reserved: false                
            },
            {
                title: "C# in depth",
                description: "C# has changed significantly since it was first introduced. With the many upgraded features, C# is more expressive than ever. However, an in depth understanding is required to get the most out of the language.",
                author:"John Skeet",
                isbn: "978-1935182474",
                cover_url: "41Xefw6MD6L.jpg",
                amazon_url: "http://www.amazon.co.uk/C-Depth-Jon-Skeet/dp/1935182471",
                reserved: false              
            },
            {
                title: "Data Science and Big Data Analytics",
                description: "Data Science and Big Data Analytics is about harnessing the power of data for new insights. The book covers the breadth of activities and methods and tools that Data Scientists use. The content focuses on concepts, principles and practical applications that are applicable to any industry and technology environment, and the learning is supported and explained with examples that you can replicate using open–source software.",
                author:"EMC Education Services",
                isbn: "978-1118876138",
                cover_url: "51vTnLyX2DL.jpg",
                amazon_url: "http://www.amazon.co.uk/Data-Science-Big-Analytics-Discovering/dp/111887613X",
                reserved: false     
            },
            {
                title: "IOS Programming: The Big Nerd Ranch Guide",
                description: "In this book, the world's leading Apple platform development trainers offer a complete, practical, hands-on introduction to iPhone and iPad programming. The authors walk through all the Apple tools and technologies needed to build successful iPhone/iPad/iPod touch apps, including the iOS 4.3 SDK, the Objective-C language, Xcode 4, Foundation framework, and the classes that make up the iOS UI framework.",
                author:"Joe Conway, Aaron Hillegass",
                isbn: "978-0321773777",
                cover_url: "41Of8gMgn1L.jpg",
                amazon_url: "http://www.amazon.co.uk/IOS-Programming-Ranch-Guide-Guides/dp/0321773772",
                reserved: false                          
            },
            {
                title: "Don't Make Me Think! A Common Sense Approach to Web Usability",
                description: "Five years and more than 100,000 copies after it was first published, it's hard to imagine anyone working in Web design who hasn't read Steve Krug's instant classic on Web usability, but people are still discovering it every day.  In this second edition, Steve adds three new chapters in the same style as the original: wry and entertaining, yet loaded with insights and practical advice for novice and veteran alike.",
                author:"Steve Krug",
                isbn: "978-0321344755",
                cover_url: "51Swm3TW72L.jpg",
                amazon_url: "http://www.amazon.co.uk/Dont-Make-Me-Think-Usability/dp/0321344758",
                reserved: false                
            }
        ];      
        
        var timestamp = new Date().getTime();
        _.each(data, function(listItem){
            // Books.insert({
            //     title: list.title,
            //     description: list.description,
            //     author: list.author,
            //     isbn: list.isbn,
            //     cover_url: list.cover_url,
            //     amazon_url: list.amazon_url,
            //                
            // });
            
            Books.insert(listItem);
                    
        });
      
    }
});