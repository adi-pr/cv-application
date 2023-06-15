import React from 'react'
import Button from 'react-bootstrap/Button'

const FormActions = ({ generatePDF} ) => {
    return ( 
        <Button variant="outline-primary" onClick={generatePDF} type="button">Export PDF</Button>
     );
}
 
export default FormActions;