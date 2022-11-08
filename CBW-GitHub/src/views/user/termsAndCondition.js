import React from 'react';
import { CardTitle, CardBody, Button } from 'reactstrap';

const TermsAndConditions = ({ onAcceptAgreement }) => {
    return (
        <>
            <CardTitle className="mb-4">Non-Solicitation Agreement</CardTitle>
            <div style={{ height: 250, overflow: 'scroll' }} >
                <p>Introduction These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.</p>

                <p>These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.</p>

                <p>Minors or people below 18 years old are not allowed to use this Website.</p>

                <p>Intellectual Property Rights Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.</p>

                <p>You are granted limited license only for purposes of viewing the material contained on this Website.</p>

                <p>Restrictions You are specifically restricted from all of the following:</p>

                <p>publishing any Website material in any other media; selling, sublicensing and/or otherwise commercializing any Website material; publicly performing and/or showing any Website material; using this Website in any way that is or may be damaging to this Website; using this Website in any way that impacts user access to this Website; using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity; engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website; using this Website to engage in any advertising or marketing. Certain areas of this Website are restricted from being access by you and Company Name may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.</p>

                <p>Your Content In these Website Standard Terms and Conditions, &ldquo;Your Content&rdquo; shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Company Name a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p>

                <p>Your Content must be your own and must not be invading any third-party's rights. Company Name reserves the right to remove any of Your Content from this Website at any time without notice.</p>

                <p>No warranties This Website is provided &ldquo;as is,&rdquo; with all faults, and Company Name express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p>

                <p>Limitation of liability In no event shall Company Name, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Company Name, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>

                <p>Indemnification You hereby indemnify to the fullest extent Company Name from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</p>

                <p>Severability If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p>

                <p>Variation of Terms Company Name is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.</p>

                <p>Assignment The Company Name is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</p>

                <p>Entire Agreement These Terms constitute the entire agreement between Company Name and you in relation to your use of this Website, and supersede all prior agreements and understandings.</p>

                <p>Governing Law &amp; Jurisdiction These Terms will be governed by and interpreted in accordance with the laws of the State of Country, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Country for the resolution of any disputes.</p>
            </div>
            <div className="d-flex justify-content-end align-items-center" style={{ marginTop: 20 }}>
                <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    onClick={onAcceptAgreement}
                >
                    I Agree
                    </Button>
            </div>
        </>
    )
}

export default TermsAndConditions;