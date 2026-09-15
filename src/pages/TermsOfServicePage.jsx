import React from 'react';
import './TermsOfServicePage.css';
import { motion } from 'framer-motion';

const TermsOfServicePage = () => {
  return (
    <div className="terms-service-page container">
      <motion.div 
        className="terms-service-content glass-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-gradient-accent">Terms & Services</h1>
        <p className="last-updated">Last Updated: August 18, 2026</p>
        
        <p>Welcome to <strong>NEXWE Solutions</strong>.</p>
        <p>These Terms & Services ("Terms", "Terms of Service", or "Agreement") govern your access to and use of the NEXWE Solutions website and the services provided by NEXWE Solutions ("NEXWE", "we", "our", or "us").</p>
        <p>By accessing our website, requesting our services, entering into a project agreement, or using any service provided by NEXWE Solutions, you agree to these Terms.</p>
        <p>If you do not agree with these Terms, please do not use our website or services.</p>
        <hr className="my-8 border-border" />

        <section>
          <h2>1. About NEXWE Solutions</h2>
          <p>NEXWE Solutions provides technology and digital services, which may include:</p>
          <ul>
            <li>Website development</li>
            <li>Web application development</li>
            <li>Mobile application development</li>
            <li>Software development</li>
            <li>UI/UX design</li>
            <li>E-commerce development</li>
            <li>Backend and API development</li>
            <li>Database development</li>
            <li>Cloud and deployment services</li>
            <li>Software maintenance and support</li>
            <li>Digital solutions</li>
            <li>AI and automation solutions</li>
            <li>IT consulting</li>
            <li>Technology consulting</li>
            <li>Custom software solutions</li>
            <li>Other technology-related services</li>
          </ul>
          <p>The specific services provided to a client will be determined by the applicable proposal, quotation, statement of work, contract, or project agreement.</p>
        </section>

        <section>
          <h2>2. Acceptance of Terms</h2>
          <p>By using our website or engaging NEXWE Solutions for services, you confirm that:</p>
          <ul>
            <li>You have read and understood these Terms.</li>
            <li>You agree to be bound by these Terms.</li>
            <li>You have the legal authority to enter into an agreement with NEXWE Solutions.</li>
            <li>The information you provide to us is accurate and complete.</li>
            <li>You will use our services for lawful purposes.</li>
          </ul>
          <p>If you are using our services on behalf of a company or organization, you confirm that you have the authority to bind that organization to these Terms.</p>
        </section>

        <section>
          <h2>3. Website Usage</h2>
          <p>You may use the NEXWE Solutions website for lawful purposes only.</p>
          <p>You must not:</p>
          <ul>
            <li>Use the website for illegal activities.</li>
            <li>Attempt to gain unauthorized access to our systems.</li>
            <li>Introduce viruses, malware, or malicious code.</li>
            <li>Attempt to disrupt website availability.</li>
            <li>Scrape or automatically collect information without authorization.</li>
            <li>Copy or reproduce website content without permission.</li>
            <li>Attempt to reverse engineer our website or systems.</li>
            <li>Impersonate NEXWE Solutions or another individual or organization.</li>
            <li>Use our website to transmit fraudulent, harmful, or misleading information.</li>
          </ul>
          <p>We reserve the right to restrict or terminate access to our website if we believe these Terms have been violated.</p>
        </section>

        <section>
          <h2>4. Services</h2>
          <p>NEXWE Solutions provides technology services based on the requirements agreed with the client.</p>
          <p>The exact scope of services may include:</p>
          <ul>
            <li>Project requirements</li>
            <li>Features and functionality</li>
            <li>Technology stack</li>
            <li>Development milestones</li>
            <li>Project timeline</li>
            <li>Deliverables</li>
            <li>Testing requirements</li>
            <li>Hosting and deployment</li>
            <li>Maintenance and support</li>
            <li>Pricing and payment terms</li>
          </ul>
          <p>The agreed scope will normally be documented through a quotation, proposal, statement of work, service agreement, or other written agreement.</p>
        </section>

        <section>
          <h2>5. Project Scope</h2>
          <p>Before beginning a project, NEXWE Solutions may define the project scope with the client.</p>
          <p>The scope may include:</p>
          <ul>
            <li>Project objectives</li>
            <li>Required features</li>
            <li>Design requirements</li>
            <li>Technical requirements</li>
            <li>Deliverables</li>
            <li>Development milestones</li>
            <li>Estimated timeline</li>
            <li>Number of revisions</li>
            <li>Testing and deployment requirements</li>
          </ul>
          <p>Any feature, service, integration, or functionality that is not included in the agreed scope may be treated as additional work.</p>
          <p>Additional work may require additional fees and may affect the project timeline.</p>
        </section>

        <section>
          <h2>6. Client Responsibilities</h2>
          <p>Clients are responsible for providing accurate and timely information required to complete a project.</p>
          <p>This may include:</p>
          <ul>
            <li>Business requirements</li>
            <li>Content</li>
            <li>Images</li>
            <li>Logos</li>
            <li>Brand guidelines</li>
            <li>Product information</li>
            <li>Technical credentials</li>
            <li>API keys</li>
            <li>Domain information</li>
            <li>Hosting information</li>
            <li>Third-party account access</li>
            <li>Legal documents where required</li>
            <li>Feedback and approvals</li>
          </ul>
          <p>Delays in providing required information or approvals may result in corresponding changes to the project timeline.</p>
        </section>

        <section>
          <h2>7. Project Timeline</h2>
          <p>NEXWE Solutions will make reasonable efforts to complete projects within the agreed timeline.</p>
          <p>However, project timelines may change due to:</p>
          <ul>
            <li>Changes in requirements</li>
            <li>Delayed client feedback</li>
            <li>Delayed content or asset delivery</li>
            <li>Third-party service issues</li>
            <li>API or platform changes</li>
            <li>Hosting issues</li>
            <li>Technical dependencies</li>
            <li>Force majeure events</li>
            <li>Additional feature requests</li>
            <li>Unexpected technical difficulties</li>
          </ul>
          <p>Unless specifically guaranteed in a written agreement, project timelines are estimates and not absolute guarantees.</p>
        </section>

        <section>
          <h2>8. Changes and Additional Work</h2>
          <p>Clients may request changes during development.</p>
          <p>Minor changes within the agreed project scope may be included where specified in the project agreement.</p>
          <p>Requests outside the agreed scope may be considered additional work.</p>
          <p>Additional work may include:</p>
          <ul>
            <li>New features</li>
            <li>Major design changes</li>
            <li>Additional pages</li>
            <li>New integrations</li>
            <li>New applications</li>
            <li>Additional APIs</li>
            <li>Additional revisions</li>
            <li>Changes after final approval</li>
            <li>Migration of additional data</li>
            <li>Additional deployment environments</li>
          </ul>
          <p>Additional work may be quoted separately before implementation.</p>
        </section>

        <section>
          <h2>9. Pricing and Payments</h2>
          <p>Service fees will be communicated through a quotation, proposal, invoice, or service agreement.</p>
          <p>Payment terms may include:</p>
          <ul>
            <li>Advance payment</li>
            <li>Milestone payments</li>
            <li>Monthly payments</li>
            <li>Final payment</li>
            <li>Subscription fees</li>
            <li>Maintenance fees</li>
            <li>Hosting or third-party service costs</li>
          </ul>
          <p>Unless otherwise agreed in writing, work may begin only after the required initial payment has been received.</p>
        </section>

        <section>
          <h2>10. Late or Failed Payments</h2>
          <p>If a payment is overdue, NEXWE Solutions may:</p>
          <ul>
            <li>Pause development work</li>
            <li>Suspend access to certain services</li>
            <li>Delay delivery</li>
            <li>Suspend maintenance or support</li>
            <li>Withhold final deliverables</li>
            <li>Require outstanding amounts to be paid before continuing work</li>
          </ul>
          <p>Any applicable late payment charges will be specified in the relevant agreement or invoice.</p>
        </section>

        <section>
          <h2>11. Third-Party Services</h2>
          <p>Projects may depend on third-party services, including:</p>
          <ul>
            <li>Cloud hosting providers</li>
            <li>Payment gateways</li>
            <li>Email providers</li>
            <li>SMS providers</li>
            <li>WhatsApp services</li>
            <li>Google services</li>
            <li>Social media platforms</li>
            <li>Maps and location services</li>
            <li>AI providers</li>
            <li>Domain registrars</li>
            <li>CDN providers</li>
            <li>Analytics platforms</li>
            <li>Database providers</li>
            <li>Other APIs or software platforms</li>
          </ul>
          <p>NEXWE Solutions is not responsible for outages, pricing changes, API changes, restrictions, security incidents, or service interruptions caused by third-party providers.</p>
          <p>Third-party charges are normally the responsibility of the client unless otherwise agreed.</p>
        </section>

        <section>
          <h2>12. Hosting and Domain Services</h2>
          <p>Where NEXWE Solutions assists with hosting, domains, servers, cloud infrastructure, or deployment, the specific responsibilities will be defined in the applicable project agreement.</p>
          <p>Unless explicitly included in the service agreement, domain registration, hosting, cloud infrastructure, SSL certificates, email services, third-party APIs, and other external services may be billed separately.</p>
        </section>

        <section>
          <h2>13. Intellectual Property</h2>
          <p>Unless otherwise agreed in writing, NEXWE Solutions retains ownership of its pre-existing:</p>
          <ul>
            <li>Source code</li>
            <li>Frameworks</li>
            <li>Libraries</li>
            <li>Components</li>
            <li>Templates</li>
            <li>Development tools</li>
            <li>Internal systems</li>
            <li>Design systems</li>
            <li>Technical processes</li>
            <li>Reusable modules</li>
            <li>Know-how</li>
            <li>Proprietary technology</li>
          </ul>
          <p>After full payment of the applicable project fees, ownership or usage rights for the specific custom deliverables will be transferred or licensed to the client according to the applicable project agreement.</p>
          <p>Third-party libraries, frameworks, open-source software, APIs, fonts, images, and other third-party materials remain subject to their respective licenses.</p>
        </section>

        <section>
          <h2>14. Client-Provided Content</h2>
          <p>Clients retain ownership of content and materials they provide to NEXWE Solutions, including:</p>
          <ul>
            <li>Logos</li>
            <li>Images</li>
            <li>Videos</li>
            <li>Text</li>
            <li>Documents</li>
            <li>Product information</li>
            <li>Business data</li>
            <li>Trademarks</li>
          </ul>
          <p>By providing such materials, the client confirms that they have the necessary rights and permissions to use them.</p>
          <p>The client grants NEXWE Solutions permission to use the provided materials solely as necessary to perform the agreed services.</p>
        </section>

        <section>
          <h2>15. Open-Source Software</h2>
          <p>NEXWE Solutions may use open-source software, frameworks, libraries, and development tools when appropriate.</p>
          <p>Examples may include:</p>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Django</li>
            <li>PostgreSQL</li>
            <li>Other open-source frameworks and libraries</li>
          </ul>
          <p>Open-source components remain subject to their respective licenses.</p>
          <p>The inclusion of open-source software does not transfer ownership of those third-party components to the client.</p>
        </section>

        <section>
          <h2>16. AI and Automated Services</h2>
          <p>Where NEXWE Solutions provides AI-powered or automated solutions, results may be generated using third-party AI models, APIs, or machine-learning systems.</p>
          <p>AI-generated results may occasionally contain:</p>
          <ul>
            <li>Errors</li>
            <li>Inaccurate information</li>
            <li>Incomplete information</li>
            <li>Unexpected results</li>
            <li>Bias</li>
            <li>Hallucinated or fabricated information</li>
          </ul>
          <p>AI-generated output should be reviewed and validated before being used for important business, legal, financial, medical, or other high-impact decisions.</p>
          <p>NEXWE Solutions does not guarantee that AI-generated output will always be accurate, complete, or suitable for a particular purpose.</p>
        </section>

        <section>
          <h2>17. Testing and Client Approval</h2>
          <p>NEXWE Solutions may provide testing and quality assurance before delivering a project.</p>
          <p>The client is responsible for reviewing the delivered product and reporting issues within the agreed testing or review period.</p>
          <p>Once a project or milestone has been approved by the client, subsequent changes may be treated as additional work unless they relate to defects within the agreed scope.</p>
        </section>

        <section>
          <h2>18. Maintenance and Support</h2>
          <p>Maintenance and technical support are provided only when included in the applicable agreement or service plan.</p>
          <p>Support may include:</p>
          <ul>
            <li>Bug fixes</li>
            <li>Technical assistance</li>
            <li>Security updates</li>
            <li>Minor changes</li>
            <li>Performance improvements</li>
            <li>Deployment assistance</li>
          </ul>
          <p>Unless specifically included, support does not automatically include:</p>
          <ul>
            <li>New features</li>
            <li>Major redesigns</li>
            <li>New applications</li>
            <li>New integrations</li>
            <li>Extensive data migration</li>
            <li>Third-party service costs</li>
            <li>Infrastructure upgrades</li>
          </ul>
        </section>

        <section>
          <h2>19. Service Availability</h2>
          <p>We aim to provide reliable services, but we do not guarantee that our website or services will always be:</p>
          <ul>
            <li>Available</li>
            <li>Uninterrupted</li>
            <li>Error-free</li>
            <li>Completely secure</li>
            <li>Free from technical issues</li>
          </ul>
          <p>Temporary interruptions may occur due to:</p>
          <ul>
            <li>Maintenance</li>
            <li>Infrastructure problems</li>
            <li>Network failures</li>
            <li>Cybersecurity incidents</li>
            <li>Third-party outages</li>
            <li>Server problems</li>
            <li>Software updates</li>
            <li>Events outside our reasonable control</li>
          </ul>
        </section>

        <section>
          <h2>20. Confidentiality</h2>
          <p>NEXWE Solutions respects confidential information shared by clients during the course of a project.</p>
          <p>Confidential information may include:</p>
          <ul>
            <li>Business strategies</li>
            <li>Technical information</li>
            <li>Source code</li>
            <li>Credentials</li>
            <li>Financial information</li>
            <li>Customer information</li>
            <li>Product plans</li>
            <li>Internal documentation</li>
          </ul>
          <p>We will use reasonable measures to protect confidential information and will not intentionally disclose it to unauthorized parties except where:</p>
          <ul>
            <li>Required by law</li>
            <li>Necessary to provide the agreed services</li>
            <li>Authorized by the client</li>
            <li>Required to protect our legal rights or security</li>
          </ul>
          <p>Separate confidentiality or non-disclosure agreements may be entered into where required.</p>
        </section>

        <section>
          <h2>21. Data Protection</h2>
          <p>Personal information provided to NEXWE Solutions will be handled in accordance with our <strong>Privacy Policy</strong> and applicable data protection laws.</p>
          <p>Our Privacy Policy explains how we collect, use, store, and protect personal information.</p>
        </section>

        <section>
          <h2>22. Security</h2>
          <p>Clients are responsible for maintaining the security of their own:</p>
          <ul>
            <li>Account credentials</li>
            <li>Passwords</li>
            <li>API keys</li>
            <li>Hosting accounts</li>
            <li>Domain accounts</li>
            <li>Third-party accounts</li>
          </ul>
          <p>Clients should not share sensitive credentials through unsecured communication channels.</p>
          <p>NEXWE Solutions will take reasonable measures to protect credentials and technical information entrusted to us for providing services.</p>
        </section>

        <section>
          <h2>23. User Content and Client Data</h2>
          <p>Clients are responsible for ensuring that information, files, content, databases, documents, and other materials supplied to NEXWE Solutions:</p>
          <ul>
            <li>Are legally obtained</li>
            <li>Do not violate applicable laws</li>
            <li>Do not infringe third-party rights</li>
            <li>Do not contain unauthorized personal information</li>
            <li>Do not contain malicious software</li>
          </ul>
          <p>NEXWE Solutions is not responsible for legal violations arising from client-provided content or data.</p>
        </section>

        <section>
          <h2>24. Cancellation and Termination</h2>
          <p>Either party may terminate a project or service according to the terms specified in the applicable agreement.</p>
          <p>NEXWE Solutions may suspend or terminate services if:</p>
          <ul>
            <li>Payments remain unpaid</li>
            <li>The client materially breaches the agreement</li>
            <li>The client requests unlawful activities</li>
            <li>The client abuses our staff or systems</li>
            <li>The client attempts unauthorized access</li>
            <li>Continuing the service creates significant security or legal risks</li>
          </ul>
          <p>Upon termination, the client remains responsible for approved work and outstanding fees incurred before termination, subject to the applicable agreement.</p>
        </section>

        <section>
          <h2>25. Refunds</h2>
          <p>Refund eligibility will depend on the applicable service agreement, quotation, invoice, or refund policy.</p>
          <p>Certain costs may be non-refundable, including:</p>
          <ul>
            <li>Completed development work</li>
            <li>Third-party service fees</li>
            <li>Domain registration fees</li>
            <li>Hosting fees</li>
            <li>Subscription fees</li>
            <li>Licensing fees</li>
            <li>Services already delivered</li>
          </ul>
          <p>Where a separate Refund and Cancellation Policy applies, that policy will govern the relevant refund request.</p>
        </section>

        <section>
          <h2>26. Disclaimer</h2>
          <p>NEXWE Solutions provides technology services using reasonable professional care and skill.</p>
          <p>However, we do not guarantee that:</p>
          <ul>
            <li>Every software system will be completely error-free</li>
            <li>Every third-party service will remain available</li>
            <li>Software will work indefinitely without maintenance</li>
            <li>Technology platforms will not change</li>
            <li>AI-generated results will always be accurate</li>
            <li>A website or application will achieve a particular commercial result</li>
            <li>Services will meet requirements that were not included in the agreed scope</li>
          </ul>
          <p>Business results depend on many factors outside our control.</p>
        </section>

        <section>
          <h2>27. Limitation of Liability</h2>
          <p>To the maximum extent permitted by applicable law, NEXWE Solutions will not be responsible for indirect, incidental, special, consequential, or unforeseeable losses arising from the use of our website or services.</p>
          <p>This may include loss of:</p>
          <ul>
            <li>Profits</li>
            <li>Revenue</li>
            <li>Business opportunities</li>
            <li>Data</li>
            <li>Goodwill</li>
            <li>Expected savings</li>
          </ul>
          <p>Nothing in these Terms is intended to exclude liability that cannot legally be excluded or limited under applicable law.</p>
          <p>Where applicable, the maximum liability of NEXWE Solutions will be determined by the relevant project or service agreement.</p>
        </section>

        <section>
          <h2>28. Indemnification</h2>
          <p>To the extent permitted by applicable law, the client agrees to indemnify and hold NEXWE Solutions, its employees, contractors, and representatives harmless from claims, losses, damages, liabilities, or expenses arising from:</p>
          <ul>
            <li>Client-provided content</li>
            <li>Client's unlawful use of our services</li>
            <li>Client's violation of these Terms</li>
            <li>Client's infringement of third-party rights</li>
            <li>Unauthorized use of third-party materials</li>
            <li>Misuse of software or services provided by NEXWE Solutions</li>
          </ul>
        </section>

        <section>
          <h2>29. Force Majeure</h2>
          <p>NEXWE Solutions will not be responsible for delays or failure to perform caused by circumstances beyond our reasonable control.</p>
          <p>Such circumstances may include:</p>
          <ul>
            <li>Natural disasters</li>
            <li>Government actions</li>
            <li>Internet outages</li>
            <li>Power failures</li>
            <li>Cybersecurity incidents</li>
            <li>War</li>
            <li>Civil disturbances</li>
            <li>Epidemics or pandemics</li>
            <li>Telecommunications failures</li>
            <li>Third-party service failures</li>
            <li>Infrastructure failures</li>
            <li>Other events beyond reasonable control</li>
          </ul>
        </section>

        <section>
          <h2>30. Changes to Services</h2>
          <p>NEXWE Solutions may modify, update, replace, or discontinue certain website features or services.</p>
          <p>Where a client has an active contractual service, changes will be handled according to the applicable agreement.</p>
        </section>

        <section>
          <h2>31. Changes to These Terms</h2>
          <p>We may update these Terms & Services from time to time.</p>
          <p>Changes may be made to reflect:</p>
          <ul>
            <li>New services</li>
            <li>Changes in technology</li>
            <li>Changes in business practices</li>
            <li>Changes in applicable laws</li>
            <li>Security improvements</li>
          </ul>
          <p>The updated version will be published on this page with a revised <strong>Last Updated</strong> date.</p>
          <p>Continued use of our website after changes are published may constitute acceptance of the updated Terms where legally applicable.</p>
        </section>

        <section>
          <h2>32. Governing Law</h2>
          <p>These Terms shall be governed by and interpreted in accordance with the applicable laws of India.</p>
          <p>Any disputes arising in connection with these Terms or our services shall be subject to the jurisdiction specified in the applicable agreement between NEXWE Solutions and the client.</p>
          <p>If no separate jurisdiction is specified in the applicable agreement, disputes shall be subject to the appropriate courts having jurisdiction over NEXWE Solutions' registered or principal place of business, subject to applicable law.</p>
        </section>

        <section>
          <h2>33. Severability</h2>
          <p>If any provision of these Terms is determined to be invalid, unlawful, or unenforceable, the remaining provisions will continue to remain in effect to the extent permitted by law.</p>
        </section>

        <section>
          <h2>34. Entire Agreement</h2>
          <p>For client projects, these Terms should be read together with the applicable:</p>
          <ul>
            <li>Proposal</li>
            <li>Quotation</li>
            <li>Statement of Work</li>
            <li>Service Agreement</li>
            <li>Invoice</li>
            <li>Project-specific terms</li>
            <li>Privacy Policy</li>
            <li>Refund and Cancellation Policy</li>
          </ul>
          <p>Where there is a conflict between these Terms and a specific written client agreement, the specific client agreement may take precedence for that project.</p>
        </section>

        <section>
          <h2>35. Contact Us</h2>
          <p>If you have questions regarding these Terms & Services, please contact us.</p>
          <div className="contact-info">
            <p><strong>NEXWE Solutions</strong></p>
            <p>Email: <a href="mailto:nexwesolutions@gmail.com">nexwesolutions@gmail.com</a></p>
            <p>Phone: +91 6379833975</p>
            <p>Address: Tamil Nadu, India</p>
            <p>Website: <a href="/">NEXWE Solutions</a></p>
          </div>
          <p>For legal or contractual enquiries, please use the subject: <strong>"Terms & Services Enquiry"</strong></p>
        </section>

        <section>
          <h2>36. Acceptance</h2>
          <p>By accessing the NEXWE Solutions website, requesting our services, or entering into a project or service agreement with NEXWE Solutions, you acknowledge that you have read, understood, and agreed to these Terms & Services.</p>
        </section>

        <p className="copyright">© 2026 NEXWE Solutions. All Rights Reserved.</p>
      </motion.div>
    </div>
  );
};

export default TermsOfServicePage;
