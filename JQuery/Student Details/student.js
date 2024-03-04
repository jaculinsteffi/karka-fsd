let student = [
    jerin = {
        Name: "Jerin Ditto",
        Age: "17-07-1995",
        Gender: "Male",
        Skills: ["HTML", "CSS", "steel works"],
        Education: [
            college = {
                Institution: "The Indian polytechnic college",
                passedout: 2014,
                subject: "Mechanical",
                Percentage: 64
            },
            Tenth = {
                Institution: "Annamal hr.sec school",
                passedout: 2011
            }
        ],
        Experience: "JJ Engineering works",
        Personaldetails: {
            father: "Justin John",
            mother: "Jansi Rani",
            Marital: "Single",
            Address: "vadakankulam"
        }
    },
    nibin = {
        Name: "Nibin Ditto",
        Age: "17-11-2001",
        Gender: "Male",
        Skills: ["Arc", "Gas welding"],
        Education: [
            college = {
                Institution: "The Indian polytechnic college",
                passedout: 2023,
                subject: "Petroleum",
                Percentage:67
            },
            Tenth = {
                Institution: "St.Annes hr.sec school",
                passedout: 2018
            }
        ],
        Experience: "JJ Engineering works",
        Personaldetails: {
            father: "Justin John",
            mother: "Jansi Rani",
            Marital: "Single",
            Address: "vadakankulam"
        }
    },
    Jaculin = {
        Name: "jaculin",
        Dob: "04.08.1997",
        Email: "jaculinsteffi@gmail.com",
        Contact: "9585187672",
        Skills: ["HTML", "CSS", "JavaScript"],
        Education: [
            college = {
                Institution: "University college of engineering",
                passedout: 2012,
                Subject: "Electrical",
                Percentage: 78
               
            },
            Twelth = {
                Institution: "Hebron matric hr.sec school",
                passedout: 2015,
                Subject: "maths&biology",
                Percentage: 92

            },
            Tenth = {
                Institution: "Hebron matric hr.sec school",
                passedout: 2013,
                Percentage: 98

            }

        ],
        Experience: [
            programcoordinator = {
                company: "Goodwill Communication Pte ltd",
                years: "2013"
            },
            projectEngineer = {
                company: "Ng cheng bock contractor Pte Ltd",
                years: "2023"
            }
        ],
        Personaldetails: {
            maritalstatus: "married",
            Father: "Justin John",
            Mother: "Jansi Rani",
            Spouse: "Vivin Rexsal Raj",
            Address: "vadakankulam"

        }

    },
    Vivin = {
        Name: "Vivin Rexsal Raj",
        Dob: "01.03.1989",
        Email: "vivinraj1989@gmail.com",
        Contact: "8489802113",
        Skills: ["Construction", "safety", "Architecture", "HTML"],
        Education: [
            college = {
                Institution: "Morning Star polytechnic college",
                passedout: 2012,
                Subject: "Mechanical",
                Percentage: 78
            },
            Twelth = {
                Institution: "Gvnt hr.sec.school",
                passedout: 2010,
                Subject: "maths&biology",
                Percentage: 72

            },
            Tenth = {
                Institution: "Gvnt hr.sec.school",
                passedout: 2006,
                Percentage: 78

            }

        ],
        Experience: [
            SafetySupervisor = {
                company: "TVS Lucas",
                years: "2012"
            },
            AssistantEngineer = {
                company: "Ng cheng bock contractor Pte Ltd",
                years: "2014-present"
            }
        ],
        Personaldetails: {
            maritalstatus: "married",
            Father: "Vincent",
            Mother: "Maria Nesam",
            Address: "sahayanagar"

        }

    }
]
// console.log(student)
// for(let i=0;i<student.length;i++){
//     // console.log(student[i])
//     // console.log(student[i].Name)
//     for(let j=0;j<student[i].Education.length;j++){
//         // console.log(student[i].Education[j])
//         if(student[i].Education[j].passedout == 2012){
//             console.log(student[i].Name)
//         }
//     }

// }

// for (let i = 0; i < student.length; i++) {
//     for (let j = 0; j < student[i].Skills.length; j++) {
//         if (student[i].Skills[j] == "HTML") {
//             for (let k = 0; k < student[i].Education.length; k++) {
//                 console.log(student[i].Education[0].Institution, "Institute");
//                 console.log(student[i].Name, "name")

//                 break
//             }

//         }
//     }
// }
for(let i=0;i<student.length;i++){
    for(let j=0;j<student[i].Skills.length;j++){
        if(student[i].Skills[j] == "HTML"){
            for(let k=0;k<student[i].Education.length;k++){
                if(student[i].Education[0].Percentage > 70 && student[i].Personaldetails.Address== "vadakankulam"){
                    console.log(student[i].Name)
                    break
                }
                
}

            }
        }
    }
    

