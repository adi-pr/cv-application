import React, { useState, useCallback } from 'react'
import CVForm from './CVForm/CVFrom'
import CVPreview from './CVPreview/CVPreview'
import emptyCV from './Utils/emptyCV'
import uniqid from "uniqid";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Footer from './Footer';

function Main() {

    const [cv, setCv] = useState(emptyCV)


    const generatePDF = async () => {
        const doc = new jsPDF();
      
        const element = document.getElementById('cv');
      
        const canvas = await html2canvas(element);
      
        const imgData = canvas.toDataURL('image/png');
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
        doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
        doc.save('cv.pdf');
      };
      

        const handleChangePersonal = (e) => {
            const { name, value } = e.target;

            setCv((prevState) => ({
                ...prevState,
                personalInfo: {
                    ...prevState.personalInfo,
                    [name]: value,
                }
            }))
        }

        const handleFileChange = (e) => {
            if (e.target.files && e.target.files[0]) {
                setCv((prevState) => ({
                    ...prevState,
                    personalInfo: {
                        ...prevState.personalInfo,
                        pfp: URL.createObjectURL(e.target.files[0]),
                    }
                }))
            }
        };

        const handleChangeEducation = (e, id) => {
            const { name, value } = e.target

            setCv((prevState) => {
                const newEducation = prevState.education.map((educationItem) => {
                    if (educationItem.id === id) {
                        return { ...educationItem, [name]: value }
                    }
                    return educationItem
                })
                return { ...prevState, education: [...newEducation] }
            })
        }

        const handleAddEducation = useCallback((e) => {
            e.preventDefault()

            setCv((prevState) => ({
                ...prevState,
                education: [
                    ...prevState.education,
                    {
                        id: uniqid(),
                        universityName: '',
                        city: '',
                        degree: '',
                        subject: '',
                        from: '',
                        to: '',
                    },
                ],
            }));
        }, []);

        const handleDeleteEducation = (id) => {
            setCv((prevState) => {
                const newEducation = prevState.education.filter(
                    (educationItem) => educationItem.id !== id
                )
                return { ...prevState, education: [...newEducation] }
            })
        }

        const handleChangeExperience = (e, id) => {
            const { name, value } = e.target

            setCv((prevState) => {
                const newExperience = prevState.experience.map((experienceItem) => {
                    if (experienceItem.id === id) {
                        return { ...experienceItem, [name]: value }
                    }
                    return experienceItem
                })
                return { ...prevState, experience: [...newExperience] }
            })
        }

        const handleAddExperience = useCallback((e) => {
            e.preventDefault()

            setCv((prevState) => ({
                ...prevState,
                experience: [
                    ...prevState.experience,
                    {
                        id: uniqid(),
                        position: '',
                        company: '',
                        city: '',
                        from: '',
                        to: '',
                    },
                ],
            }));
        }, []);

        const handleDeleteExperience = (id) => {
            setCv((prevState) => {
                const newExperience = prevState.experience.filter(
                    (experienceItem) => experienceItem.id !== id
                )
                return { ...prevState, experience: [...newExperience] }
            })
        }

        return (
            <>
                <CVForm
                    cv={cv}
                    handleChangePersonal={handleChangePersonal}
                    handleFileChange={handleFileChange}
                    handleChangeEducation={handleChangeEducation}
                    onAddEducation={handleAddEducation}
                    onDeleteEducation={handleDeleteEducation}
                    handleChangeExperience={handleChangeExperience}
                    onAddExperience={handleAddExperience}
                    onDeleteExperience={handleDeleteExperience}
                    generatePDF={generatePDF}
                />


                <CVPreview cv={cv} />
                <Footer />
            </>
        );
    }

    export default Main;


