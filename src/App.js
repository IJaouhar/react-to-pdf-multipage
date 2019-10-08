import React from 'react';
import logo from './logo.svg';
import './App.css';
import Subcomponent from './sub-component';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function App() {
  //   const print = (quality = 2) => {
  //     const filename = 'ThisIsYourPDFFilename.pdf';

  //     html2canvas(document.querySelector('#tonto'),
  //         { scale: quality }
  //     ).then(canvas => {
  //         let pdf = new jsPDF('p', 'mm', 'a4');
  //         pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
  //         pdf.addPage();
  //         pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
  //         pdf.addPage();
  //         pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
  //         pdf.addPage();
  //         pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
  //         pdf.save(filename);
  //     });
  // }

  const print = (quality = 2) => {
    const filename = 'ThisIsYourPDFFilename.pdf';


    html2canvas(document.querySelector('#tonto'),
      { scale: quality }
    ).then(canvas => {
      let pdf = new jsPDF('p', 'mm', 'a4');
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var imgData = canvas.toDataURL('image/png');
      var position = 0;
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;

          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }
          pdf.save(filename);
    });
  }
  return (
    <div className="tonto2">
      <Subcomponent />
      <button onClick={() => { print() }}>PRINTME</button>
    </div>
  );
}

export default App;
