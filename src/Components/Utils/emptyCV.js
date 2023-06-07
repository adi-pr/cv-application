import uniqid from "uniqid";


const emptyCV = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
  },
  experience: [
    {
      id: uniqid(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ],
  education: [
    {
      id: uniqid(),
      universityName: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    },
  ],
};

export default emptyCV;