import React from 'react'
import Link from 'next/link'

const Consultation
 = () => {
  return (
    <div className='mx-auto pb-36 '>
        <div className='mx-auto pt-6'>
          <p className='text-center text-4xl font-semibold pb-6'>Consultation Form</p>
        </div>
        <form className='f-consult bg-gray-100 p-12 rounded-3xl shadow-lg'>
            <div className='flex justify-between'>
              <div className='w-2/3'>
                <p className='pb-5'>Report Number : 1233456</p>
                <label for="patientName" class="block mb-2  font-medium text-gray-900 pt-3 ">Patient Name</label>
                        <input type="text" name="patientName" id="patientName" class="bg-gray-50 border border-gray-300 text-gray-900 sm: rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Patient Name" required=""/>
                <label for="postition" class="block mb-2 mt-2 font-medium text-gray-900 pt-3">Position/Course</label>
                        <input type="text" name="postition" id="postition" class="bg-gray-50 border border-gray-300 text-gray-900 sm: rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Postition/Course" required=""/>
                <label for="department" class="block mb-2 mt-2 font-medium text-gray-900 pt-3">Department/College</label>
                        <input type="text" name="department" id="department" class="bg-gray-50 border border-gray-300 text-gray-900 sm: rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      " placeholder="Department/College" required=""/>
                <label for="symptom" className='pt-3'>Initial Symptom : </label>
                <select name="symptom" id="symptom" className='leading-8'>
                  <option value="" selected> </option>
                  <option value="Fever">Fever</option>
                  <option value="Vomiting">Vomiting</option>
                  <option value="Sore Throat">Sore Throat</option>
                  <option value="Sore Eyes">Sore Eyes</option>
                  <option value="Dizziness">Dizziness</option>
                  <option value="Running Nose">Running Nose</option>
                  <option value="Skin Rash">Skin Rash</option>
                  <option value="Allergy">Allergy</option>
                  <option value="Bruises">Bruises</option>
                  <option value="Black Eye">Black Eye</option>
                </select>
              </div>
              <div className='w-1/3 pl-8'>
                  <p>Date : June 26, 2023</p>
                  <p>Time : 3:36 PM</p>
              </div>
            </div>
            <div>
            <label for="diagnosis" class="block mb-2  font-medium text-gray-900 ">Diagnosis</label>
                    <textarea name="message" id="symptom" class="bg-gray-50 border border-gray-300 text-gray-900 sm: rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 h-44" placeholder="Diagnosis" required=""/>
            </div>
            <div className='flex justify-between pt-3'>
              <div>
               <p> Medical Supplies Given : </p>
               <div>
                  <label for="productName" className=''>Product Name : </label>
                    <select name="productName" id="productName" className='leading-8'>
                      <option value="" selected> </option>
                      <option value="Paracetamol">Paracetamol</option>
                      <option value="Bioflu">Bioflu</option>
                      <option value="Biogesic">Biogesic</option>
                      <option value="Loperamide">Loperamide</option>
                      <option value="Advil">Advil</option>
                      <option value="Neozep">Neozep</option>
                      <option value="Tempra for Kids">Tempra for Kids</option>
                      <option value="Enervon">Enervon</option>
                      <option value="Chocolate">Chocolate</option>
                      <option value="Band-aid">Band-aid</option>
                      <option value="Alcohol">Alcohol</option>
                      <option value="Betadine">Betadine</option>
                      <option value="Cotton Ball">Cotton Ball</option>
                      <option value="Micropore">Micropore</option>
                      <option value="Gauze">Gauze</option>
                      <option value="Gaviscon">Gaviscon</option>
                    
                    </select>
               </div>
               <div className='flex items-center'>
                  <label for="quantity" class="block font-medium text-gray-900">Quantity : &nbsp;</label>
                  <input type="text" name="quantity" id="quantity" class="bg-white border border-gray-300 text-gray-900 sm: rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-32 pl-2.5 p-1" placeholder="Quantity" required=""/>
               </div>
              </div>
              <div className='flex flex-col'>
              <label for="status" className=''>Patient Status : </label>
                <select name="status" id="status" className='mb-20'>
                <option value="" selected> </option>
                  <option value="In-bed">In-bed</option>
                  <option value="Outpatient">Outpatient</option>
                 
                </select>

                <Link href="/dashboard/"> <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  shadow-lg shadow-green-500/50 rounded-lg px-5 py-2.5 text-center mr-2 mb-2 text-lg">Consultation Done</button></Link>
              </div>
            </div>
        </form>
    </div>
  )
}

export default Consultation
