var txtIntroduction = {
	id: 'qual_01',
    title: 'Quality Introduction',
    comment: [
        'The purpose of this chapter is to define quality as it relates to projects and to present the Scrum approach to achieve the required levels of quality.',
		'Quality, as defined in A Guide to the Scrum Body of Knowledge (SBOK™ Guide), is applicable to the following:',
		'* Portfolios, programs, and/or projects in any industry',
		'* Products, services, or any other results to be delivered to stakeholders',
		'* Projects of any size or complexity',
		'The term “product” in the SBOK™ Guide may refer to a product, service, or other deliverable. Scrum can be applied effectively to any project in any industry—from small projects or teams with as few as six team members to large, complex projects with up to several hundred team members.'
    ]
};

var txtRoles = {
	id: 'qual_02',
    title: 'Roles Guide',
	comment: [
		'Product Owner—It is important for anyone assuming the role of Product Owner in Scrum projects to read this complete chapter.',
		'Scrum Master—The Scrum Master should also be familiar with this entire chapter with primary focus on sections 5.3, 5.4, 5.5.3, and 5.6.',
		'Scrum Team—The Scrum Team should mainly focus on sections 5.3, 5.4, and 5.6.'
	]
};

var qual_scope = {
	id: 'qual_03',
	stitle: 'scope',
	title: 'Quality and Scope',
	comment: [
		'Scope and quality requirements for a project are determined by taking into consideration various factors such as the following:',
		'<li>The business need the project will fulfill',
		'<li>The capability and willingness of the organization to meet the identified business need',
		'<li>The current and future needs of the target audience',
		'The scope of a project is the total sum of all the product increments and the work required for developing the final product. Quality is the ability of the deliverables to meet the quality requirements for the product and satisfy customer needs. In Scrum, the scope and quality of the project are captured in the Prioritized Product Backlog, and the scope for each Sprint is determined by refining the large Prioritized Product Backlog Items (PBIs) into a set of small but detailed User Stories that can be planned, developed, and verified within a Sprint.',
		'The Prioritized Product Backlog is continuously groomed by the Product Owner. The Product Owner ensures that any User Stories that the Scrum Team is expected to do in a Sprint are refined prior to the start of the Sprint. In general, the most valuable requirements in solving the customers’ problems or meeting their needs are prioritized as high and the remaining are given a lower priority. Less important User Stories are developed in subsequent Sprints or can be left out altogether according to the customer’s requirements. During Sprint execution, the Product Owner, customer, and the Scrum Team can discuss the list of features of the product to comply with the changing needs of the customers.'
	]
};

var qual_value = {
	id: 'qual_04',
	stitle: 'value',
	title: 'Quality and Business Value',
	comment: [
		'Quality and business value are closely linked. Therefore, it is critical to understand the quality and scope of a project in order to correctly map the outcomes and benefits the project and its product must achieve in order to deliver business value. To determine the business value of a product, it is important to understand the business need that drives the requirements of the product. Thus, business need determines the product required, and the product, in turn provides the expected business value.',
		'Quality is a complex variable. An increase in scope without increasing time or resources tends to reduce quality. Similarly, a reduction in time or resources without decreasing scope also generally results in a decrease in quality. Scrum believes in maintaining a ʺsustainable paceʺ of work, which helps improve quality over a period of time.',
			'The Scrum Guidance Body may define minimum quality requirements and standards required for all projects in the organization. The standards must be adhered to by all Scrum Teams in the company.'
	]
};

var txtDefined = {
	id: 'qual_05',
    title: 'Quality Defined',
	overview : {
		title: 'Overview',
		comment: [
		'There are numerous ways to define quality.',
		'In Scrum, quality is defined as the ability of the completed product or deliverables to meet the Acceptance Criteria and achieve the business value expected by the customer.',
		'To ensure that a project meets quality requirements, Scrum adopts an approach of continuous improvement whereby the team learns from experience and stakeholder engagement to constantly keep the Prioritized Product Backlog updated with any changes in requirements. The Prioritized Product Backlog is simply never complete until the closure or termination of the project. Any changes to the requirements reflect changes in the internal and external business environment and allow the team to continually work and adapt to achieve those requirements. Since Scrum requires work to be completed in increments during Sprints, this means that errors or defects get noticed earlier through repetitive quality testing, rather than when the final product or service is near completion. Moreover, important quality-related tasks (e.g., development, testing, and documentation) are completed as part of the same Sprint by the same team—this ensures that quality is inherent in any Done deliverable created as part of a Sprint. Thus, continuous improvement with repetitive testing optimizes the probability of achieving the expected quality levels in a Scrum project. Constant discussions between the Scrum Core Team and stakeholders (including customers and users) with actual increments of the product being delivered at the end of every Sprint, ensures that the gap between customer expectations from the project and actual deliverables produced is constantly reduced.'
	]
	},
	scope: qual_scope,
	value: qual_value
};

var qual_writingExample = {
	id: 'qual_06',
	title: 'Example',
	comment: [
		'Persona: Janine is a married 36 year old working professional with a family of three children. She is a busy, successful woman who balances her professional and personal life. She is comfortable with technology and is an early adopter of innovative services and products. She is always connected to the internet through multiple devices and regularly shops on e-commerce portals.',
		'User Story: “As an online grocery shopper Janine, I should be able to save and view my draft order from any of my devices so that I can complete the order process at my convenience.”',
		'<b>Acceptance Criteria</b>:',
		'<li>Every in-progress order must be saved every 5 seconds to the logged in user account as a draft order',
		'<li>New draft orders must show up as notifications on any devices the user logs in'
	]
};

var qual_writing = {
	id: 'qual_07',
	title: 'Writing Acceptance Criteria',
	stitle: 'writing',
	comment: [
		'Acceptance Criteria are unique to each User Story and are not a substitute for a requirements list.',
		'It is important for a Product Owner to note that User Stories that fulfill most, but not all, Acceptance Criteria cannot be accepted as Done. Scrum projects operate in Time-boxed Sprints, with a dedicated Sprint Backlog for each Sprint. Often, the last bit of work might be the most complicated part of a User Story and might take longer than expected. If incomplete User Stories were given partial credit for being Done and carried over to the next Sprint, then the progress of the subsequent Sprint could be disrupted. Therefore, the Done status is black and white. A User Story can only be either Done or not Done.'
	],
	example: qual_writingExample
};

var qual_minTable = {
	id: 'qual_08',
	title: 'Responsibilities',
	nbcol: 2,
	head: ['Roles','Responsibilities'],
	body: [
		[['Portfolio Product Owner'],['<li>Sets the minimum Acceptance Criteria for the entire portfolio','<li>Reviews portfolio deliverables']],
		[['Program Product Owner'],['<li>Sets the minimum Acceptance Criteria for the entire program, which includes the Acceptance Criteria from the portfolio','<li>Reviews program deliverables']],
		[['Product Owner'],['<li>Sets the minimum Acceptance Criteria for the project, which includes the Acceptance Criteria from the program','<li>Reviews project deliverablese']]
	]
};

var qual_minimum = {
	id: 'qual_09',
	title: 'Minimum Acceptance Criteria',
	stitle: 'minimum',
	comment: [
		'A higher level business unit may announce mandatory minimum Acceptance Criteria, which then become part of the Acceptance Criteria for any User Story for that business unit. Any functionality defined by the business unit must satisfy these minimum Acceptance Criteria, if it is to be accepted by the respective Product Owner. The introduction of this Acceptance Criteria may lead to a cascading set of Acceptance Criteria for the portfolio, program, and project (see Figure 5-2). The overall quality standards, guidelines, and templates for an entire portfolio are set by the Portfolio Product Owner while the minimum Acceptance Criteria for programs are set by the Program Product Owner. Thus the Acceptance Criteria for a User Story in a project will implicitly include all the minimum Acceptance Criteria from the higher levels, as applicable.',
		'Once the minimum Acceptance Criteria are defined, such criteria may then be documented in the Scrum Guidance Body documents and referred to by Scrum Teams as required.'
	],
	cascading: qual_minTable
};

var qual_done = {
	id: 'qual_10',
	stitle: 'done',
	title: 'Definition of Done',
	comment: [
		'There is one key difference between “Done Criteria” and “Acceptance Criteria”. While Acceptance Criteria are unique for individual User Stories, Done Criteria are a set of rules that are applicable to all User Stories in a given Sprint. General Done Criteria could include any of the following:',
		'<li>Reviewed by other team members<li>Completed unit testing of the User Story<li>Completion of quality assurance tests<li>Completion of all documentation related to the User Story<li>All issues are fixed<li>Successful demonstration to stakeholders and/or business representatives',
		'As with the Acceptance Criteria, all conditions of the Done Criteria must be satisfied for the User Story to be considered Done.',
		'The Scrum Team should use a checklist of the general Done Criteria to ensure a task is finished and the result meets the Definition of Done (DoD). A clear Definition of Done is critical because it helps remove ambiguity and allows the team to adhere to required quality norms. The definition of Done is typically determined and documented by the Scrum Guidance Body.',
		'The required records and data to comply with the project’s documentation requirements can be generated as the team proceeds through Sprints and Releases.',
		'The inclusion of activities such as holding review meetings and writing design documents can help ensure compliance with internal and external quality standards. The basic principles of Scrum such as short iterations, incremental building, customer involvement, adaptation to changing requirements, and constantly adjusting scope, time, and cost within the project will still apply.'
	]
};

var qual_acceptance = {
	id: 'qual_11',
	stitle: 'acceptance',
	title: 'Acceptance or Rejection of backlog',
	comment: [
		'<b>Acceptance or Rejection of Prioritized Product Backlog Items</b>',
		'Toward the end of any iteration, the respective business unit and stakeholders participate in a Sprint Review Meeting in which the product increment is demonstrated to the Product Owner, sponsor, customer, and users. While feedback from all the stakeholders is gathered, only the Product Owner has the power to accept or reject a particular User Story as Done, according to the agreed upon Acceptance Criteria. Thus, the role of Acceptance Criteria in maintaining quality is critical and needs to be clearly understood by the team. It is the responsibility of the Scrum Master to ensure that the Acceptance Criteria for a User Story are not changed by the Product Owner in the middle of a Sprint. Partially completed User Stories are rejected as not Done and moved back into the Prioritized Product Backlog.'
	]
};

var txtAcceptance = {
	id: 'qual_12',
    title: 'Acceptance Criteria and the Prioritized Product Backlog',
	overview: {
		title: 'Overview',
		comment: [
			'The Prioritized Product Backlog is a single requirements document that defines the project scope by providing a prioritized list of features of the product or service to be delivered by the project. The required features are described in the form of User Stories. User Stories are specific requirements outlined by various stakeholders as they pertain to the proposed product or service. Each User Story will have associated User Story Acceptance Criteria (also referred to as “Acceptance Criteria”), which are the objective components by which a User Story’s functionality is judged. Acceptance Criteria are developed by the Product Owner according to his or her expert understanding of the customer’s requirements. The Product Owner then communicates the User Stories in the Prioritized Product Backlog to the Scrum Team members and their agreement is sought. Acceptance Criteria should explicitly outline the conditions that User Stories must satisfy. Clearly defined Acceptance Criteria are crucial for timely and effective delivery of the functionality defined in the User Stories, which ultimately determines the success of the project.',
			'At the end of each Sprint, the Product Owner uses these criteria to verify the completed deliverables; and can either accept or reject individual deliverables and their associated User Stories. If deliverables are accepted by the Product Owner, then the User Story is considered Done. A clear definition of Done is critical because it helps clarify requirements and allows the team to adhere to quality norms. It also helps the team think from the user’s perspective when working with User Stories.',
			'User Stories corresponding to rejected deliverables are added back to the Updated Prioritized Product Backlog during the Groom Prioritized Product Backlog process, to be completed in future Sprints. The rejection of a few individual deliverables and their corresponding User Stories is not a rejection of the final product or product increment. The product or product increment could be potentially shippable even if a few User Stories are rejected.'
		],
		image: '../images/quality1.png',
	},
	writing: qual_writing,
	minimum: qual_minimum,
	done: qual_done,
	acceptance: qual_acceptance
};

var qual_planning = {
	id: 'qual_13',
	title: 'Quality Planning',
	comment: [
		'One of the guiding principles of Scrum is to develop the functionality of the highest priority to the customer first. Less important features are developed in subsequent Sprints or can be left out altogether according to the customer’s requirements. This approach gives the Scrum Team the required time to focus on the quality of essential functionality. A key benefit of quality planning is the reduction of technical debt. Technical debt— also referred to as design debt or code debt—refers to the work that teams prioritize lower, omit, or do not complete as they work toward creating the primary deliverables associated with the project’s product. Technical debt accrues and must be paid in the future.',
		'Some causes of technical debt can include the following:',
		'<li>Quick-fix and building deliverables that do not comply with standards for quality, security, long-term architecture goals, etc.',
		'<li>Inadequate or incomplete testing',
		'<li>Improper or incomplete documentation',
		'<li>Lack of coordination among different team members, or if different Scrum Teams start working in isolation, with less focus on final integration of components required to make a project or program successful',
		'<li>Poor sharing of business knowledge and process knowledge among the stakeholders and project teams',
		'<li>Too much focus on short-term project goals instead of the long-term objectives of the company. This oversight can result in poor-quality Working Deliverables that incur significant maintenance and upgrade costs.',
		'In Scrum projects, any technical debt is not carried over beyond a Sprint, because there should be clearly defined Acceptance and Done Criteria. The functionality must satisfy these criteria to be considered Done. As the Prioritized Product Backlog is groomed and User Stories are prioritized, the team creates Working Deliverables regularly, preventing the accumulation of significant technical debt. The Scrum Guidance Body may also include documentation and definition of processes which help in decreasing technical debt.',
		'To maintain a minimal amount of technical debt, it is important to define the product required from a Sprint and the project along with the Acceptance Criteria, any development methods to be followed, and the key responsibilities of Scrum Team members in regards to quality. Defining Acceptance Criteria is an important part of quality planning and it allows for effective quality control to be carried out during the project.',
		'Technical debt is a very big challenge with some traditional project management techniques where development, testing, documentation, etc. are done sequentially and often-times by different persons, with no one person being responsible for any particular Working Deliverable. As a result, technical debt accrues, leading to significantly higher maintenance, integration, and product release costs in the final stages of a project’s release. Also, the cost of changes is very high in such circumstances as problems surface in later stages of the project. Scrum framework prevents the issues related to technical debt by ensuring that Done deliverables with Acceptance Criteria are defined as part of the Sprint Backlog and key tasks including development, testing, and documentation are done as part of the same Sprint and by the same Scrum Team.'
	]
};

var qual_integration = {
	id: 'qual_14',
	title: 'Continuous Integration and Sustainable Pace',
	comment: [
		'Maintaining a sustainable pace is one of the most important tenets of Scrum. Sustainable pace translates to increased employee satisfaction, stability, and increased estimation accuracy, all of which ultimately leads to increased customer satisfaction. To develop a truly high quality product and maintain a healthy work environment, it is important to carry out integration-type activities regularly, rather than delaying the integration work until the end in such circumstances. To provide value at frequent intervals, the team should continuously develop, test, and integrate the functionalities of each Prioritized Product Backlog Item (PBI) in every Sprint with the use of techniques, such as continuous integration and automated product testing. It is also important, from the team’s point of view, to ensure that the effort expended in the current Sprint is similar to the effort spent in the preceding Sprint in order to sustain an even pace throughout the project Sprints. This helps the team avoid phases of intense periods of work, ensuring they are always able to put forth the level of effort required to accomplish the work that needs to be done.'
	]
};

var qual_control = {
	id: 'qual_15',
	title: 'Quality Control and Quality Assurance',
	stitle: 'control',
	comment: [
        'Quality control refers to the execution of the planned quality activities by the Scrum Team in the process of creating deliverables that are potentially shippable. It also includes learning from each set of completed activities in order to achieve continuous improvement. Within the cross-functional team, it is important to have the skills necessary to perform quality control activities. During the Sprint Retrospect Meeting, team members discuss lessons learned. These lessons act as inputs into continuous improvement and contribute to the improvement of ongoing quality control.',
        "Quality is required not only in products, but also in processes. Quality assurance refers to the evaluation of processes and standards that govern quality management in a project to ensure that they continue to be relevant. Quality assurance activities are carried out as part of the work. In fact, quality assurance is a significant factor of the definition of Done. The deliverable isn't complete if appropriate quality assurance has not been conducted. Often, quality assurance is demonstrated during the Sprint Review Meeting. Product Owners for respective projects, programs, and portfolios can monitor and evaluate quality assurance activities to ensure each team continues to agree and comply with the quality standards that have been set. End-to-end quality assurance may be addressed during final testing of the product, a Release, or a Sprint. A comparison of the number of issues encountered versus the number of User Stories completed can be done. The product components that have defects can be incorporated as Prioritized Product Backlog Items (PBIs), which can be worked upon by either the team or by one person at certain times during the Sprint, depending on the number of defects.",
        'At times, the Scrum Guidance Body can define the processes and documents that can be referred to by Scrum Teams when doing their projects to ensure that uniform quality norms are followed by all projects within the company.'
	]
};

var qual_pdca = {
	id: 'qual_16',
	stitle: 'pdca',
	title: 'Plan-Do-Check-Act (PDCA) Cycle',
	comment: [
		'The Plan-Do-Check-Act Cycle—also known as the Deming or Shewhart Cycle—was developed by Dr. W. Edwards Deming, considered the father of modern quality control and Dr. Walter A. Shewhart. The following are some important points of Deming’s philosophy:',
		'<li>Management guidelines define quality. When management is able to provide a conducive environment and is able to motivate its employees to improve quality on a continuous basis, each employee will be able to make a contribution toward a superior quality product. Deming’s “Theory of Profound Knowledge” advocates what management should do in order to create an environment in which each employee can make significant contributions to quality improvement.',
		'Deming modified Plan-Do-Check-Act to Plan-Do-Study-Act (PDSA) because he felt the term ‘Study’ emphasized analysis rather than simply inspection, as implied by the term ‘Check.’',
		'Both Scrum and the Deming/Shewhart/PDCA Cycle are iterative methods that focus on continuous improvement. Figure below illustrates the stages of the PDCA Cycle and their correlation with various Scrum processes.'
	],
	image: '../images/pdca.png'
};

var txtManagement = {
	id: 'qual_17',
    title: 'Quality Management in Scrum',
	overview: {
		title: 'Overview',
		comment: [
			'The customer is the most important stakeholder for any project. Therefore, it is important to understand the customer’s needs and requirements. The Voice of the Customer (VOC) can be referred to as the explicit and implicit requirements of the customer, which must be understood prior to the designing of a product or service. Generally, in a Scrum environment, the Product Owner’s focus is on business requirements and objectives, which together represent the Voice of the Customer. The Product Owner can benefit greatly from the guidance available from the Scrum Guidance Body (either through quality documents or standards, or from quality experts). These specialists should work with the Product Owner and the customer to ensure the appropriate level of detail and information in the User Stories, since User Stories are the basis for the success of any Scrum project.',
			'It should be noted that external stakeholders are not directly involved at the Scrum Team level and, instead, interact primarily with the Product Owner. For any Scrum project, the customer may be either of the following:',
			'<li>Internal (that is, within the same organization)<li>External (that is, outside the organization)',
			'Quality management in Scrum enables customers to become aware of any problems in the project early and helps them recognize if a project is going to work for them or not. In Scrum, quality is about customer satisfaction and a working product, not necessarily meeting arbitrary metrics. This distinction becomes very important from the customer’s point of view because they are the ones investing time and money in the project.',
			'Quality management in Scrum is facilitated through three interrelated activities:',
			'1. Quality planning',
			'2. Quality control',
			'3. Quality assurance'
		]
	},
	planning: {
		title: 'Quality Planning',
		stitle: 'planning',
		planning: qual_planning,
		integration: qual_integration
	},
	control: qual_control,
	pdca: qual_pdca
};

var qual_sumTable = {
	id: 'qual_18',
	title: 'Summary',
	nbcol: 2,
	head: ['Roles','Responsibilities'],
	body: [
		[['Scrum Guidance Body'],['Provides definition of Done','Provides framework and guidance for developing Acceptance Criteria','Defines the range of tools that can be used by the Scrum Team to develop and verify the product']],
		[['Portfolio Product Owner'],['Sets minimum Acceptance Criteria for the entire portfolio','Reviews portfolio Deliverables']],
		[['Portfolio Scrum Master'],['Ensures that a sustainable pace is maintained in which the focus is on quality of features rather than strictly on velocity']],
		[['Program Product Owner'],['Sets the minimum Acceptance Criteria for the entire program','Reviews program Deliverables']],
		[['Program Scrum Master'],['Ensures that a sustainable pace is maintained in which the focus is on quality of features rather than strictly on velocity']],
		[['Stakeholder(s)'],['Reviews and accepts the Deliverables and final product']],
		[['Product Owner'],['States the business requirements for the product and defines requirements clearly in the Prioritized Product Backlog','Assesses viability and ensures that Deliverables meet the quality requirements','Sets the minimum Acceptance Criteria for the entire project, including the Acceptance Criteria of the respective program','Facilitates creation of Acceptance Criteria for User Stories','Reviews and validates the Deliverables during Demonstrate and Validate Sprint']],
		[['Scrum Master'],['Facilitates a ‘team first’ mentality when it comes to quality','Eliminates environmental obstructions that may affect the quality of deliverables and processes','Ensures that a sustainable pace is maintained in which the focus is on quality of features rather than strictly on velocity','Ensures that Scrum processes are correctly followed by all team members, including the Product Owner']],
		[['Scrum Team'],['Develops and maintains all Deliverables during Sprints until they are handed over to the end users','Practices and encourages good communication so that the requirements are clarified and fully understood','Shares knowledge to ensure that team members familiarize themselves with the whole feature set and therefore benefit from the experience of others','Makes appropriate changes to Deliverables swiftly']]
	]
};

var txtSummary = {
	id: 'qual_19',
    title: 'Quality: Summary of Responsibilities',
	table: qual_sumTable
};

var txtVs = {
	id: 'qual_20',
    title: 'Scrum vs. Traditional Project Management',
	comment: [
		'Although there are similarities in Scrum and traditional project management methods with regard to definition of ‘quality’ (i.e., the ability of the product to meet the agreed Acceptance Criteria and achieve the business value expected by the customer), differences exist in terms of how the approaches address the implementation and achievement of the required quality levels.',
		'In traditional project management methods, the users clarify their expectations; the project manager defines those expectations in measurable terms and gains agreement from the users. After detailed planning, the project team develops the product over an agreed period of time. If any of the agreed criteria are to be changed, changes can happen only through a formal change management system where impact of changes is estimated and the Project Manager gets approval from all relevant stakeholders.',
		'In Scrum, however, the Product Owner collaborates with the Scrum Team and defines the Acceptance Criteria for the User Stories related to the product to be delivered. The Scrum Team then develops the product in a series of short iterations called Sprints. The Product Owner can make changes to the requirements to keep pace with the user needs and these changes can be addressed by the Scrum Team either by terminating the current Sprint or including the adjusted requirements in the next Sprint as each Sprint is of very short duration (i.e., one to six weeks).',
		'One of the major advantages of Scrum is the emphasis on creating potentially shippable deliverables at the end of each Sprint cycle, instead of at the end of the entire project. So, the Product Owner and customers constantly inspect, approve, and accept Deliverables after each Sprint. Also, even if a Scrum project is terminated early, there is some value created prior to termination through the Deliverables created in individual Sprints.'
	]
};

exports.txtIntroduction = txtIntroduction; // qual_01
exports.txtRoles = txtRoles; // qual_02
exports.txtDefined = txtDefined; //qual_05
exports.txtAcceptance = txtAcceptance; // qual_12
exports.txtManagement = txtManagement; // qual_17
exports.txtSummary = txtSummary; // qual_19
exports.txtVs = txtVs; // qual_20

exports.qual_scope = qual_scope; // qual_03
exports.qual_value = qual_value; // qual_04
exports.qual_writingExample = qual_writingExample // qual_06
exports.qual_writing = qual_writing // qual_07
exports.qual_minTable = qual_minTable // qual_08
exports.qual_minimum = qual_minimum // qual_09
exports.qual_done = qual_done // qual_10
exports.qual_acceptance = qual_acceptance // qual_11
exports.qual_planning = qual_planning // qual_13
exports.qual_integration = qual_integration // qual_14
exports.qual_control = qual_control // qual_15
exports.qual_pdca = qual_pdca // qual_16
exports.qual_sumTable = qual_sumTable // qual_18