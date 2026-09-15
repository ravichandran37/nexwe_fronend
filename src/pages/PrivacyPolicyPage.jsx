import React from 'react';
import './PrivacyPolicyPage.css';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-page container">
      <motion.div 
        className="privacy-policy-content glass-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-gradient-accent">Privacy Policy</h1>
        <p className="last-updated">Last Updated: August 18, 2026</p>
        
        <section>
          <h2>1. Introduction</h2>
          <p>Welcome to NEXWE Solutions.</p>
          <p>NEXWE Solutions ("NEXWE", "we", "our", or "us") respects your privacy and is committed to protecting the personal information of our website visitors, customers, clients, employees, job applicants, and other individuals who interact with our services.</p>
          <p>This Privacy Policy explains how NEXWE Solutions collects, uses, stores, protects, and discloses personal information when you visit our website, communicate with us, use our services, submit an enquiry, apply for a position, or otherwise interact with us.</p>
          <p>By accessing or using our website, you acknowledge that you have read and understood this Privacy Policy.</p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>Depending on how you interact with NEXWE Solutions, we may collect the following information.</p>
          
          <h3>2.1 Information You Provide</h3>
          <p>You may voluntarily provide information including:</p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company or organization name</li>
            <li>Job title or designation</li>
            <li>Business address</li>
            <li>Project requirements</li>
            <li>Service enquiries</li>
            <li>Messages and communications</li>
            <li>Information submitted through contact forms</li>
            <li>Information submitted through career or job application forms</li>
            <li>Resume/CV and professional information</li>
            <li>Any other information you voluntarily provide</li>
          </ul>

          <h3>2.2 Technical Information</h3>
          <p>When you visit our website, certain technical information may automatically be collected, including:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device type</li>
            <li>Operating system</li>
            <li>Screen resolution</li>
            <li>Website pages visited</li>
            <li>Date and time of access</li>
            <li>Referring website</li>
            <li>Approximate location derived from technical information</li>
            <li>Website interaction and usage information</li>
          </ul>
          <p>This information may be used to maintain website security, improve performance, and understand how visitors use our website.</p>
        </section>

        <section>
          <h2>3. How We Collect Information</h2>
          <p>NEXWE Solutions may collect personal information when you:</p>
          <ul>
            <li>Visit our website</li>
            <li>Submit a contact form</li>
            <li>Request a quotation</li>
            <li>Request information about our services</li>
            <li>Contact us by email, telephone, or other communication channels</li>
            <li>Become a customer or client</li>
            <li>Enter into a business relationship with us</li>
            <li>Submit a job application</li>
            <li>Subscribe to newsletters or marketing communications</li>
            <li>Participate in surveys, events, or promotional activities</li>
            <li>Communicate with our team</li>
            <li>Use services or platforms provided by NEXWE Solutions</li>
          </ul>
        </section>

        <section>
          <h2>4. How We Use Your Information</h2>
          <p>We may use collected information for legitimate business purposes, including:</p>
          <ul>
            <li>Responding to enquiries</li>
            <li>Providing requested information</li>
            <li>Preparing quotations and proposals</li>
            <li>Delivering our services</li>
            <li>Managing client relationships</li>
            <li>Communicating with customers and prospective customers</li>
            <li>Understanding project requirements</li>
            <li>Providing technical and customer support</li>
            <li>Processing contracts and business transactions</li>
            <li>Managing job applications</li>
            <li>Conducting recruitment activities</li>
            <li>Improving our website and services</li>
            <li>Monitoring website performance</li>
            <li>Preventing fraud, abuse, and unauthorized access</li>
            <li>Protecting our systems and information</li>
            <li>Maintaining business records</li>
            <li>Complying with applicable laws and regulations</li>
            <li>Sending service-related communications</li>
            <li>Sending marketing communications where permitted</li>
          </ul>
          <p>We will use personal information only for appropriate purposes and in accordance with applicable law.</p>
        </section>

        <section>
          <h2>5. Legal Basis for Processing</h2>
          <p>Where applicable, NEXWE Solutions may process personal information based on:</p>
          <ul>
            <li>Your consent</li>
            <li>Your request for a service or information</li>
            <li>Performance of a contract or steps necessary before entering into a contract</li>
            <li>Legitimate business purposes where permitted by applicable law</li>
            <li>Compliance with legal obligations</li>
            <li>Prevention of fraud, security threats, or misuse</li>
            <li>Other lawful purposes permitted under applicable law</li>
          </ul>
          <p>India's Digital Personal Data Protection Act, 2023 establishes requirements concerning lawful processing of digital personal data and notice to individuals.</p>
        </section>

        <section>
          <h2>6. Contact and Enquiry Forms</h2>
          <p>When you submit information through a NEXWE Solutions contact or enquiry form, we may collect information such as:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Service requirements</li>
            <li>Project details</li>
            <li>Message or enquiry</li>
          </ul>
          <p>We use this information to respond to your enquiry and provide relevant information about our services.</p>
          <p>We do not sell your contact-form information to third parties.</p>
        </section>

        <section>
          <h2>7. Client and Project Information</h2>
          <p>When you become a NEXWE Solutions client, we may process information necessary to provide our services. This may include:</p>
          <ul>
            <li>Client contact information</li>
            <li>Company information</li>
            <li>Project requirements</li>
            <li>Technical requirements</li>
            <li>Business requirements</li>
            <li>Documents provided by the client</li>
            <li>Communication records</li>
            <li>Billing and transaction information</li>
          </ul>
          <p>We use such information to deliver, maintain, support, and improve the services agreed with the client.</p>
          <p>Confidential client information will be handled according to applicable contractual obligations and confidentiality agreements.</p>
        </section>

        <section>
          <h2>8. Payment Information</h2>
          <p>If payments are processed through third-party payment providers, your payment information may be handled directly by the relevant payment provider.</p>
          <p>Unless specifically required and lawfully permitted, NEXWE Solutions does not intentionally store complete:</p>
          <ul>
            <li>Credit card numbers</li>
            <li>Debit card numbers</li>
            <li>CVV numbers</li>
            <li>UPI PINs</li>
            <li>Internet banking passwords</li>
            <li>Other confidential payment credentials</li>
          </ul>
          <p>Payment providers may have their own privacy policies and terms governing their processing of information.</p>
        </section>

        <section>
          <h2>9. Cookies</h2>
          <p>Our website may use cookies and similar technologies. Cookies may help us:</p>
          <ul>
            <li>Keep the website functioning correctly</li>
            <li>Remember preferences</li>
            <li>Understand website usage</li>
            <li>Analyze website traffic</li>
            <li>Improve website performance</li>
            <li>Improve user experience</li>
            <li>Detect security issues</li>
          </ul>
          <p>You can manage or disable cookies through your browser settings. Disabling certain cookies may affect some website functionality.</p>
        </section>

        <section>
          <h2>10. Analytics and Third-Party Services</h2>
          <p>NEXWE Solutions may use third-party technologies and services to operate and improve our website. These may include services for:</p>
          <ul>
            <li>Website analytics</li>
            <li>Performance monitoring</li>
            <li>Security</li>
            <li>Hosting</li>
            <li>Communication</li>
            <li>Customer support</li>
            <li>Form processing</li>
            <li>Email delivery</li>
            <li>Payment processing</li>
            <li>Cloud storage</li>
          </ul>
          <p>These third-party providers may process information according to their own privacy policies and contractual obligations. Where appropriate, we seek to use reputable service providers and take reasonable steps to protect information shared with them.</p>
        </section>

        <section>
          <h2>11. Marketing Communications</h2>
          <p>Where permitted by applicable law and where appropriate consent has been obtained, we may use your contact information to send:</p>
          <ul>
            <li>Company updates</li>
            <li>Product announcements</li>
            <li>Service information</li>
            <li>Newsletters</li>
            <li>Technology updates</li>
            <li>Promotional information</li>
            <li>Events and announcements</li>
          </ul>
          <p>You may opt out of promotional communications at any time. You can request removal from marketing communications by contacting us or using the unsubscribe option included in the relevant communication. You may continue to receive essential communications relating to services, transactions, security, or contractual matters.</p>
        </section>

        <section>
          <h2>12. Job Applications and Recruitment</h2>
          <p>If you apply for a position at NEXWE Solutions, we may collect:</p>
          <ul>
            <li>Name</li>
            <li>Contact information</li>
            <li>Resume/CV</li>
            <li>Education details</li>
            <li>Employment history</li>
            <li>Skills and qualifications</li>
            <li>Portfolio information</li>
            <li>Interview information</li>
            <li>Other information voluntarily provided during recruitment</li>
          </ul>
          <p>We use this information to:</p>
          <ul>
            <li>Evaluate applications</li>
            <li>Conduct interviews</li>
            <li>Communicate with candidates</li>
            <li>Verify qualifications where appropriate</li>
            <li>Manage recruitment processes</li>
            <li>Consider candidates for suitable opportunities</li>
          </ul>
          <p>Recruitment information may be retained for a reasonable period for legitimate recruitment and record-keeping purposes, subject to applicable law.</p>
        </section>

        <section>
          <h2>13. Sharing of Information</h2>
          <p>NEXWE Solutions does not sell or rent personal information. We may share information when reasonably necessary with:</p>
          <ul>
            <li>Service providers</li>
            <li>Hosting providers</li>
            <li>Cloud service providers</li>
            <li>Payment processors</li>
            <li>Email and communication providers</li>
            <li>Analytics providers</li>
            <li>IT and security providers</li>
            <li>Professional advisors</li>
            <li>Business partners where necessary to provide services</li>
            <li>Government authorities where legally required</li>
            <li>Law-enforcement authorities where legally required</li>
            <li>Other parties where disclosure is necessary to protect our rights, systems, users, or property</li>
          </ul>
          <p>We aim to disclose only information that is reasonably necessary for the relevant purpose.</p>
        </section>

        <section>
          <h2>14. Business Transfers</h2>
          <p>If NEXWE Solutions is involved in a merger, acquisition, restructuring, investment, sale of assets, or similar corporate transaction, personal information may be transferred as part of that transaction where legally permitted.</p>
          <p>Any such transfer will remain subject to applicable privacy and data protection requirements.</p>
        </section>

        <section>
          <h2>15. Data Security</h2>
          <p>NEXWE Solutions takes reasonable technical and organizational measures to protect personal information against:</p>
          <ul>
            <li>Unauthorized access</li>
            <li>Unauthorized disclosure</li>
            <li>Loss</li>
            <li>Misuse</li>
            <li>Alteration</li>
            <li>Destruction</li>
            <li>Security threats</li>
          </ul>
          <p>Security measures may include access controls, authentication mechanisms, secure communication technologies, monitoring, and other appropriate safeguards. However, no online service, network, or storage system can be guaranteed to be completely secure.</p>
        </section>

        <section>
          <h2>16. Data Retention</h2>
          <p>We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including:</p>
          <ul>
            <li>Providing services</li>
            <li>Maintaining client relationships</li>
            <li>Managing business records</li>
            <li>Processing transactions</li>
            <li>Handling support requests</li>
            <li>Meeting contractual obligations</li>
            <li>Complying with legal and regulatory requirements</li>
            <li>Resolving disputes</li>
            <li>Protecting our legal rights</li>
            <li>Managing recruitment processes</li>
          </ul>
          <p>When information is no longer reasonably required, we may delete, anonymize, or securely dispose of it, subject to applicable legal requirements.</p>
        </section>

        <section>
          <h2>17. Your Privacy Rights</h2>
          <p>Subject to applicable law, you may have rights relating to your personal information, including:</p>
          <ul>
            <li>Requesting information about personal data we process</li>
            <li>Requesting correction of inaccurate information</li>
            <li>Requesting deletion of personal information where applicable</li>
            <li>Withdrawing consent where processing is based on consent</li>
            <li>Raising a privacy-related complaint</li>
            <li>Requesting information regarding how your personal information is processed</li>
          </ul>
          <p>The exact rights available to you may depend on applicable law and the circumstances in which your information is processed. The DPDP Act provides a framework for individual rights concerning digital personal data.</p>
        </section>

        <section>
          <h2>18. Withdrawal of Consent</h2>
          <p>Where we process your personal information based on consent, you may withdraw your consent by contacting us. Withdrawal of consent will not affect processing that was lawfully completed before the withdrawal. Please note that withdrawing consent may affect our ability to provide certain services if the relevant information is necessary for those services.</p>
        </section>

        <section>
          <h2>19. Children's Privacy</h2>
          <p>Our website and services are not intentionally designed to collect personal information from children without appropriate authorization or legal basis. If we become aware that personal information has been collected in circumstances where such collection was not permitted, we will take reasonable steps to address the situation in accordance with applicable law.</p>
        </section>

        <section>
          <h2>20. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites, platforms, or services. These may include:</p>
          <ul>
            <li>Social media platforms</li>
            <li>Software platforms</li>
            <li>Payment providers</li>
            <li>Partner websites</li>
            <li>Recruitment platforms</li>
            <li>External resources</li>
          </ul>
          <p>NEXWE Solutions is not responsible for the privacy practices, security, or content of third-party websites. We recommend reviewing the privacy policy of any third-party website before providing personal information.</p>
        </section>

        <section>
          <h2>21. International Data Processing</h2>
          <p>Some of our technology, hosting, cloud, communication, or service providers may process information in countries outside India. Where personal information is transferred or processed outside India, NEXWE Solutions will take reasonable steps to comply with applicable data protection requirements.</p>
        </section>

        <section>
          <h2>22. Changes to This Privacy Policy</h2>
          <p>NEXWE Solutions may update this Privacy Policy from time to time. Changes may be made because of:</p>
          <ul>
            <li>Changes to our services</li>
            <li>Changes in technology</li>
            <li>Changes to our data processing practices</li>
            <li>Changes in applicable laws or regulations</li>
            <li>Changes to our security practices</li>
          </ul>
          <p>When we update this Privacy Policy, we will update the Last Updated date at the beginning of this document. We recommend reviewing this page periodically.</p>
        </section>

        <section>
          <h2>23. Grievance and Privacy Requests</h2>
          <p>If you have a question, concern, request, or complaint regarding the processing of your personal information, please contact NEXWE Solutions.</p>
          <div className="contact-info">
            <p><strong>Privacy Contact</strong></p>
            <p>NEXWE Solutions</p>
            <p>Email: <a href="mailto:privacy@nexwe.com">privacy@nexwe.com</a></p>
            <p>Phone: +91 6379833975</p>
            <p>Address: Tamil Nadu, India</p>
            <p>Website: <a href="/">NEXWE Solutions</a></p>
          </div>
          <p>Please use the subject line: <strong>"Privacy Request"</strong></p>
          <p>We will review privacy-related requests and respond in accordance with applicable law and our internal procedures.</p>
        </section>

        <section>
          <h2>24. Consent</h2>
          <p>By using the NEXWE Solutions website and voluntarily providing personal information, you acknowledge that you have read and understood this Privacy Policy. Where consent is legally required for a particular processing activity, we will seek consent through an appropriate mechanism.</p>
        </section>

        <section>
          <h2>25. Contact Information</h2>
          <p>For general enquiries:</p>
          <div className="contact-info">
            <p>NEXWE Solutions</p>
            <p>Email: <a href="mailto:nexwesolutions@gmail.com">nexwesolutions@gmail.com</a></p>
            <p>Phone: +91 6379833975</p>
            <p>Address: Tamil Nadu, India</p>
            <p>Website: <a href="/">NEXWE Solutions</a></p>
          </div>
        </section>
        
        <p className="copyright">© 2026 NEXWE Solutions. All Rights Reserved.</p>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicyPage;
