import React from 'react'
import Nav from '../components/header'
import Footer from '../components/footer'

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#FFFDEA] min-h-screen text-[#626262]">
      <Nav />

      <main className="text-[#202020] px-8 lg:px-60 py-20 sm:py-30 gap-12 font-sans">
        <h1 className="text-4xl text-[#202020] font-bold mb-4">Privacy Policy</h1>
        <div className=''>
            This privacy policy <span className='font-bold'>(“Privacy Policy”)</span> governs the manner in which MEINE Electric
            Automotives Pvt. Ltd <span className='font-bold'>(“the Company”)</span> processes employees' personal data and has been
            prepared in accordance with the applicable laws. This Privacy Policy applies to all
            employees who are working for the Company, which includes all permanent and temporary
            employees, including employees under a fixed term contract and probationers. Please note
            that the provisions of this policy shall be amended from time to time in line with changes in
            the applicable law. The same will be notified by way of a notice posted on the Company's
            notice board or by email or both.
            The Company may collect some information from the employees during their employment.
            The Company is committed to protecting the security of employee's information and
            safeguarding their privacy.
            The Privacy Policy sets out the personal and sensitive personal information that the
            Company will collect from the employees, the purpose of collection of such information, the
            manner in which the Company may disclose such information to third parties, employees'
            rights and options, and how the Company secures the employee's information.
        </div>
        <ol className="list-decimal list-inside space-y-6 mt-4">
            <div>
                <li className='font-bold text-xl'>Sensitive personal data or information</li>
                <p>Sensitive personal data or information shall mean personal information of an individual
                    which consists of information relating to any of the following:
                    <ul className="list-disc list-inside space-y-1">
                        <li>passwords;</li> 
                        <li>financial information such as bank account or credit card or debit card or other
                        payment instrument details;</li> 
                        <li>physical, physiological and mental health condition;</li> 
                        <li>sexual orientation; and</li> 
                        <li>medical records and history</li> 
                    </ul>
                </p>
            </div>
            <div>
                <li className='font-bold text-xl'>Collection of Sensitive Personal Information</li>
                <p>The Company shall not collect sensitive personal data or information from an employee
                    unless the collection of such sensitive personal data or information is considered necessary
                    for the purpose for which it is being collected. Further, the Company may collect sensitive
                    personal data or information from non-employees as well i.e., people who visit the
                    Company's website, contractors/suppliers, customers etc.
                </p>
            </div>
            <div>
                <li className='font-bold text-xl'>Access to Sensitive Personal Information</li>
                <p>The employees shall have the right, upon request, to access and review any personal data or
                    information, including sensitive personal data or information held by the Company. Upon
                    discovering that personal data or information, including sensitive personal data or
                    information provided is inaccurate or deficient in any manner, the employee shall have the
                    right to request suitable changes or amendments to such data, which may be provided by
                    the Company as feasible.</p>
                <p>Notwithstanding anything to the contrary contained herein, the Company shall be entitled
                    to refuse access to personal data or information, including sensitive personal data or
                    information in certain cases; for instance, where providing access such information may
                    infringe the privacy of another individual.
                </p>
            </div>
            <div>
                <li className='font-bold text-xl'>Use of Sensitive Personal Information</li>
                <p>Sensitive personal data or information shall be used only for the purpose of handling any
                    matters or issues whatsoever arising out of or in connection with the employees'
                    employment relationship with the Company, including but not limited to the following:
                    <ul className="list-disc list-inside space-y-1">
                        <li>administering and maintaining personal records;</li>
                        <li>paying and reviewing salary and other remuneration and benefits;</li>
                        <li>providing and administering benefits;</li>
                        <li>undertaking performance appraisals and reviews;</li>
                        <li>maintaining sickness, holiday and other absence records;</li>
                        <li>taking decisions regarding the fitness for work of employees;</li>
                        <li>carrying out disciplinary and grievances hearings and investigations; and</li>
                        <li>providing references and information to future employers, and if necessary,</li>
                        <li>government bodies for social security purposes, as required under the applicable law.</li> 
                    </ul>
                </p>
            </div>
            <div>
                <li className='font-bold text-xl'>Transfer of Sensitive Personal Information</li>
                <p>As per applicable law, the Company shall not transfer the sensitive personal data or
                    information to any third party without the prior consent of the employees, unless such
                    transfer is necessary for the performance of a contract between the Company (or any entity
                    on its behalf) and the employee, or for reasonable business purposes.                
                </p>
            </div>
            <div>
                <li className='font-bold text-xl'>Data Retention</li>
                <p>
                    The Company maintains control over information given to third parties, in compliance with
                    the applicable laws. The Company will retain the employees’ personal information during
                    the period of his/her employment. This personal information or sensitive personal
                    information shall not be retained for longer than is required for the purpose for which the
                    information may lawfully be used or is otherwise required under any other law for the time
                    being in force.
                </p>
            </div>
            <div>
                <li className='font-bold text-xl'>Mandatory Disclosures</li>
                <p>The Company shall not disclose the sensitive personal data or information of an employee to
                any third party (other than for reasonable business purposes) and will make reasonable
                efforts to inform an employee prior to such disclosure, unless such disclosure is necessary
                for compliance of a legal obligation, or such consent has been previously obtained from the
                employee.</p>
                <p>
                However, sensitive personal data or information may be disclosed, without obtaining any
                prior consent from the employee to Government agencies mandated under the law to obtain
                information including sensitive personal data or information for the purposes of verification
                of identity, or for prevention, detection, or investigation of crime (including cyber incidents),
                for prosecution, or for punishment of offences.
                </p>
            </div>
            <div>
                <li className='font-bold text-xl'>Security and Confidentiality</li>
                <p>The Company adheres to the industry security compliance standards to protect the
                confidentiality and security of the employee’s sensitive personal information
                </p>
            </div>
            <div>
                <li className='font-bold text-xl'>Grievance Office</li>
                <p>The Company shall appoint a Grievance Officer in relation to its compliance of this policy on
                    data privacy. The following shall be reported/directed to the Grievance Officer:
                    <ul className="list-disc list-inside space-y-1">
                        <li>requests for access to their sensitive personal data or information;</li>
                        <li>any grievances in relation to their sensitive personal data or information; and</li>
                        <li>any security breach in relation to their sensitive personal data or information</li>
                    </ul>
                </p>
            </div>
            <div>
                <li className='font-bold text-xl'>Access to Privacy Policy</li>
                <p>This Privacy Policy of the Company shall be made available to all employees.
                </p>
            </div>
        </ol>
      </main>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy
