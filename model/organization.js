// org introduction
var txtIntro = {
	id: 'org_01',
    title: 'Organization: Introduction',
    comment: [
        'In this section, we will be discussing the various facets of a Scrum project organization as well as core and non-core roles and how to form high performance Scrum Teams. Organization, as defined in A Guide to the Scrum Body of Knowledge (SBOK™ Guide), is applicable to the following:',
        '•	Portfolios, programs, and/or projects in any industry',
        '•	Products, services, or any other results to be delivered to stakeholders',
        '•	Projects of any size or complexity',
        'The term “product” in the SBOK™ Guide may refer to a product, service, or other deliverable. Scrum can be applied effectively to any project in any industry—from small projects or teams with as few as six team members to large, complex projects with up to several hundred team members. '
    ]
};

var txtRoles = {
	id: 'org_02',
    title: 'Organization: Roles Guide',
    comment: [
        '1.	Product Owner—It is imperative for Product Owners to read the entire chapter.',
        '2.	Scrum Master—The Scrum Master should also be familiar with this entire chapter with primary focus on sections 3.3, 3.5, 3.6, 3.8 and 3.10.4.',
        '3.	Scrum Team— The Scrum Team should mainly focus on sections 3.3, 3.6, and 3.8.'
    ]
};

var org_owner = {
	id: 'org_03',
	title: 'Product Owner',
    comment: [
        'The Product Owner is the person responsible for maximizing business value for the project. He or she is responsible for articulating customer requirements and maintaining business justification for the project. The Product Owner represents the Voice of the Customer. ',
        'Corresponding to a Product Owner role in a project, there could be a Program Product Owner for a program or a Portfolio Product Owner for a portfolio.'
    ]
};

var org_master = {
	id: 'org_04',
	title: 'Scrum Master',
    comment: [
        'The Scrum Master is a facilitator who ensures that the Scrum Team is provided with an environment conducive to completing the product’s development successfully. The Scrum Master guides, facilitates, and teaches Scrum practices to everyone involved in the project; clears impediments for the team; and, ensures that Scrum processes are being followed. Note that the Scrum Master role is very different from the role played by the Project Manager in a traditional Waterfall model of project management, in which the Project Manager works as a manager or leader for the project. The Scrum Master only works as a facilitator and he or she is at the same hierarchical level as anyone else in the Scrum Team—any person from the Scrum Team who learns how to facilitate Scrum projects can become the Scrum Master for a project or for a Sprint.',
        'Corresponding to a Scrum Master role in a project, there could be a Program Scrum Master for a program or a Portfolio Scrum Master for a portfolio.'
    ]
};

var org_team = {
	id: 'org_05',
	title: 'Scrum Team',
    comment: [
        'The Scrum Team is a group or team of people who are responsible for understanding the business requirements specified by the Product Owner, estimating User Stories, and final creation of the project Deliverables.'
    ]
};

var org_core = {
	id: 'org_06',
	title: 'Core Roles',
	stitle: 'Roles',
	image: '../images/scrum_roles.png',
    comment: [
         'There are three core roles in Scrum that are ultimately responsible for meeting the project objectives. The core roles are the Product Owner, Scrum Master, and Scrum Team. Together they are referred to as the Scrum Core Team. It is important to note that, of these three roles, no role has authority over the others.'
    ],
    roles: [
            org_owner,
            org_master,
            org_team
        ]
};

var org_stakeholder = {
	id: 'org_07',
	title: 'Stakeholder(s)',
    comment: [
        'Stakeholder(s) is a collective term that include customers, users, and sponsors, who frequently interface with the Product Owner, Scrum Master and Scrum Team to provide them with inputs and facilitate creation of the project’s product, service, or other result. Stakeholder(s) influence the project throughout the project’s development. Stakeholders may also have a role to play during the Develop Epic(s), Create Prioritized Product Backlog, Conduct Release Planning, Retrospect Sprint, and other important processes in Scrum.',
        '<b>•	Customer</b>',
        'The customer is the individual or the organization that acquires the project’s product, service, or other result. For any organization, depending on the project, there can be both internal customers (i.e., within the same organization) or external customers (i.e., outside of the organization).',
        '<b>•	Users</b>',
        'Users are the individual or the organization that directly uses the project’s product, service, or other result. Like customers, for any organization, there can be both internal and external users. Also, in some industries customers and users may be the same.',
        '<b>•	Sponsor</b>',
        'The sponsor is the individual or the organization that provides resources and support for the project. The sponsor is also the stakeholder to whom everyone is accountable in the end. At times, the same person or organization can play multiple stakeholder roles; for example, the sponsor and the customer may be the same.'
    ]
};

var org_vendors = {
	id: 'org_08',
    title: 'Vendors',
    comment: [
        'Vendors include external individuals or organizations that provide products and services that are not within the core competencies of the project organization.'
    ]
};

var org_SGB = {
	id: 'org_09',
    title: 'Scrum Guidance Body',
    comment: [
        'The Scrum Guidance Body (SGB) is an optional role. It generally consists of a group of documents and/or a group of experts who are typically involved with defining objectives related to quality, government regulations, security, and other key organizational parameters. These objectives guide the work carried out by the Product Owner, Scrum Master, and Scrum Team. The Scrum Guidance Body also helps capture the best practices that should be used across all Scrum projects in the organization.',
        'The Scrum Guidance Body does not make decisions related to the project. Instead it acts as a consulting or guidance structure for all the hierarchy levels in the project organization—the portfolio, program, and project. Scrum Teams have the option of asking the Scrum Guidance Body for advice as required.'
    ]
};

var org_noncore = {
	id: 'org_10',
        title: 'Non-core Roles',
		stitle: 'noncore',
        comment: [
            'The non-core roles are those roles which are not mandatorily required for the Scrum project and may not be continuously or directly involved in the Scrum process. However, knowing non-core roles is important as they could play a significant part in some Scrum projects.',
            'Non-core roles can include the following:'
        ],
        roles: [
            org_stakeholder,
            org_vendors,
            org_SGB
        ]
    }

var txtProject = {
	id: 'org_11',
    title: 'Scrum Project Roles',
    overview: {
        title: 'Overview',
        comment: [
        'Understanding defined roles and responsibilities is very important for ensuring the successful implementation of Scrum projects.',
        'Scrum roles fall into two broad categories:',
        '<b>1.	Core Roles</b>—Core roles are those roles which are mandatorily required for producing the product of the project, are committed to the project, and ultimately are responsible for the success of each Sprint of the project and of the project as a whole.',
        '<b>2.	Non-core Roles</b>—Non-core roles are those roles which are not mandatorily required for the Scrum project, and may include team members who are interested in the project, have no formal role on the project team, may interface with the team, but may not be responsible for the success of the project. The non-core roles should also be taken into account in any Scrum project.'
        ]
    },
    core: org_core,
    noncore: org_noncore
};

var org_voc = {
	id: 'org_12',
	stitle: 'voc',
	title: 'Voice of the Customer (VOC)',
	comment: [
		'As the representative of the customer, the Product Owner is said to be the Voice of the Customer as he ensures that the explicit and implicit needs of the customer are translated into User Stories in the Prioritized Product Backlog and later on used to create project Deliverables for the customer.'
	]
};

var org_chiefPO = {
	id: 'org_13',
	stitle: 'chief',
	title: 'Chief Product Owner',
	comment: [
		'In the case of large projects with numerous Scrum Teams, having a Chief Product Owner may be a necessity. This role is responsible for coordinating the work of multiple Product Owners. The Chief Product Owner prepares and maintains the overall Prioritized Product Backlog for the large project, using it to coordinate work through the Product Owners of the Scrum Teams. The Product Owners, in turn, manage their respective parts of the Prioritized Product Backlog.',
		'The Chief Product Owner also interfaces with the Program Product Owner to ensure alignment of the large project with the program goals and objectives.'
	]
};

var org_resPO = {
	id: 'org_14',
	title: 'Responsibilities',
	nbcol: 2,
	head: ['Process','Product Owner Responsibilities'],
	body: [
		[['<a href="/processus/p08_1">8.1 Create Project Vision</a>'], ['Defines the Project Vision','Helps create the Project Charter and Project Budget']],
		[['<a href="/processus/p08_2">8.2 Identify Scrum Master and Stakeholder(s)</a>'],['Helps finalize Scrum Master for the project','Identifies Stakeholder(s)']],
		[['<a href="/processus/p08_3">8.3 Form Scrum Team</a>'],['Helps determine Scrum Team members','Helps develop a Collaboration Plan','Helps develop the Team Building Plan with Scrum Master(s)']],
		[['<a href="/processus/p08_4">8.4 Develop Epic(s)</a>'],['Creates Epic(s) and Personas']],
		[['<a href="/processus/p08_5">8.5 Create Prioritized Product Backlog</a>'],['Prioritizes Prioritized Product Backlog Items','Defines Done Criteria']],
		[['<a href="/processus/p08_6">8.6 Conduct Release Planning</a>'],['Creates Release Planning Scheduleacklog','Helps determine Length of Sprint']],
		[['<a href="/processus/p09_1">9.1 Create User Stories</a>'],['Helps create User Stories Sprint','Defines Acceptance Criteria for every User Story']],
		[['<a href="/processus/p09_2">9.2 Approve, Estimate and Commit User Stories</a>'],['Approves User Storieses','Facilitates Scrum Team and commit User Stories']],
		[['<a href="/processus/p09_3">9.3 Create Tasks</a>'],['Explains User Stories to the Scrum Team while creating the Task List']],
		[['<a href="/processus/p09_4">9.4 Estimate Tasks</a>'],['Provides guidance and clarification to the Scrum Team in estimating effort for tasks']],
		[['<a href="/processus/p09_5">9.5 Create Sprint Backlog Sprint</a>'],['Clarifies requirements to the Scrum Team while creating the Sprint Backlog']],
		[['<a href="/processus/p10_1">10.1 Create Deliverables</a>'],['Clarifies business requirements to the Scrum Team']],
		[['<a href="/processus/p10_3">10.3 Groom Prioritized Product Backlog</a>'],['Grooms the Prioritized Product Backlog']],
		[['<a href="/processus/p11_2">11.2 Demonstrate and Validate Sprints</a>'],['Accepts/Rejects Deliverables','Provides necessary feedback to Scrum Master and Scrum Teams','Updates Release Plan and Prioritized Product Backlog']],
		[['<a href="/processus/p12_1">12.1 Ship Deliverables</a>'],['Helps deploy Product Releases and coordinates this with the customer']],
		[['<a href="/processus/p12_2">12.2 Retrospect Project</a>'],['Participates in Retrospective Sprint Meetings']]
	],
	bodyb: ''
};

var txtOwner = {
	id: 'org_15',
	title: 'Product Owner',
	overview: {
		title: 'Overview',
		comment: [
		'The Product Owner represents the interests of the stakeholder community to the Scrum Team. The Product Owner is responsible for ensuring clear communication of product or service functionality requirements to the Scrum Team, defining Acceptance Criteria, and ensuring those criteria are met. In other words, the Product Owner is responsible for ensuring that the Scrum Team delivers value. The Product Owner must always maintain a dual view. He or she must understand and support the needs and interests of all stakeholders, while also understanding the needs and workings of the Scrum Team. Because the Product Owner must understand the needs and priorities of the stakeholders, including customers and users, this role is commonly referred to as the Voice of the Customer.',
		'The other responsibilities of a Product Owner are:',
		"* Determining the project's initial overall requirements and kicking off project activities; this may involve interaction with the Program Product Owner and the Portfolio Product Owner to ensure that the project aligns with direction provided by senior management.",
		'* Representing user(s) of the product or service with a thorough understanding of the user community',
		'* Securing the initial and ongoing financial resources for the project.',
		'* Focusing on value creation and overall Return on Investment (ROI).',
		'* Assessing the viability and ensuring the delivery of the product or service.'
		],
	},
	table: org_resPO,
	VOC: org_voc,
	chief: org_chiefPO
};

var org_chiefSM = {
	id: 'org_16',
	title: 'Chief Scrum Master',
	stitle: 'chief',
	comment: [
		'Large projects require multiple Scrum Teams to work in parallel. Information gathered from one team may need to be appropriately communicated to other teams. The Chief Scrum Master is responsible for this activity.',
		'Coordination across various Scrum Teams working on a project is typically done through the Scrum of Scrums (SoS) Meeting (see section 3.7.2.1). This is analogous to the Daily Standup Meeting and is facilitated by the Chief Scrum Master. The Chief Scrum Master is typically the individual responsible for addressing impediments that impact more than one Scrum Team.',
		'Typically, any inter-team issues are addressed by the interested parties in a session immediately following the Scrum of Scrums Meeting. The Chief Scrum Master facilitates this session.'
	],
	image: '../images/figure_3_2.png'
};

var org_respSM = {
	id: 'org_17',
	title: 'Responsibilities',
	nbcol: 2,
	head: ['Process','Product Owner Responsibilities'],
	body: [
		[['<a href="/processus/p08_2">8.2 Identify Scrum Master and Stakeholder(s)</a>'],['Helps identify Stakeholder(s) for the project']],
		[['<a href="/processus/p08_3">8.3 Form Scrum Team</a>'],['Facilitates selection of the Scrum TeamFacilitates selection of the Scrum Team','Facilitates creation of the Collaboration Plan and the Team Building Plan','Ensures back-up resources are available for smooth project functioning']],
		[['<a href="/processus/p08_4">8.4 Develop Epic(s)</a>'],['Facilitates creation of Epic(s) and Personas']],
		[['<a href="/processus/p08_5">8.5 Create Prioritized Product Backlog</a>'],['Helps Product Owner in creation of the Prioritized Product Backlog and in definition of the Done Criteria']],
		[['<a href="/processus/p08_6">8.6 Conduct Release Planning</a>'],['Coordinates creation of Release Planning Schedule','Determines Length of Sprint']],
		[['<a href="/processus/p09_1">9.1 Create User Stories</a>'],['Assists the Scrum Team in creating User Stories and their Acceptance Criteria']],
		[['<a href="/processus/p09_2">9.2 Approve, Estimate and Commit User Stories</a>'],['Facilitates meetings of the Scrum Team to estimate and Create User Stories']],
		[['<a href="/processus/p09_3">9.3 Create Tasks</a>'],['Facilitates the Scrum Team in creating the Task List for the next Sprint']],
		[['<a href="/processus/p09_4">9.4 Estimate Tasks</a>'],['Assists the Scrum Team in estimating the effort required to complete the tasks agreed to for the Sprint']],
		[['<a href="/processus/p09_5">9.5 Create Sprint Backlog</a>'],['Assists the Scrum Team in developing the Sprint Backlog and the Sprint Burndown Chart']],
		[['<a href="/processus/p10_1">10.1 Create Deliverables</a>'],['Supports the Scrum Team in creating the Deliverables agreed to for the Sprint','Helps update the Scrumboard and the Impediment Log']],
		[['<a href="/processus/p10_2">10.2 Conduct Daily Standup</a>'],['Ensures that the Scrumboard and the Impediment Log remain updated']],
		[['<a href="/processus/p10_3">10.3 Groom Prioritized Product Backlog</a>'],['Facilitates Prioritized Product Backlog Review Meetings']],
		[['<a href="/processus/p11_1">11.1 Convene Scrum of Scrums</a>'],['Ensures that issues affecting the Scrum Team are discussed and resolved']],
		[['<a href="/processus/p11_2">11.2 Demonstrate and Validate Sprints</a>'],['Facilitates presentation of completed Deliverables by the Scrum Team for the Product Owner’s approval']],
		[['<a href="/processus/p11_3">11.3 Retrospect Sprint</a>'],['Ensures that ideal project environment exists for the Scrum Team in the succeeding Sprints']],
		[['<a href="/processus/p12_2">12.2 Retrospect Project</a>'],['Represents the Scrum Core Team to provide lessons from the current project, if necessary']]
	]
};

var txtMaster = {
	id: 'org_18',
	title: 'Scrum Master',
	overview: {
		title: 'Overview',
		comment: [
			'The Scrum Master is the “servant leader” of the Scrum Team who moderates and facilitates team interactions as team coach and motivator. The Scrum Master is responsible for ensuring that the team has a productive work environment by guarding the team from external influences, removing any obstacles, and enforcing Scrum principles, aspects, and processes.'
		]
	},
	table: org_respSM,
	chief: org_chiefSM
};

var org_perso = {
	id: 'org_19',
	title: 'Personnel Selection',
	stitle: 'perso',
	comment: [
		'The figure below lists the desirable traits for the core Scrum roles.'
	],
	image: '../images/figure_3_3.png'
};

var org_size = {
	id: 'org_20',
	title: 'Scrum Team Size',
	stitle: 'size',
	comment: [
		'It is important for the Scrum Team to possess all the essential skills required to carry out the work of the project. It is also necessary to have a high level of collaboration to maximize productivity, so that minimal coordination is required to get things done.',
		'The optimum size for a Scrum Team is six to ten members—large enough to ensure adequate skill sets, but small enough to collaborate easily. A key benefit of a six to ten member team is that communication and management are typically simple and require minimal effort. However, there may also be drawbacks. One major drawback is that smaller teams are more significantly impacted by the loss of a team member than larger teams, even for a short period of time. To address this problem, it may be possible for team members to have expert knowledge and skills outside their own specific role. However, this may be difficult and depends on the type of project, industry, and size of the organization. It is also recommended to have backup persons to replace any person who may have to leave the Scrum Team.'
	]
}

var org_persT = {
	id: 'org_21',
	title: 'Responsibilities',
	nbcol: 2,
	head: ['Process','Product Owner Responsibilities'],
	body: [
		[['<a href="/processus/p08_3">8.3 Form Scrum Team</a>'],['Provides inputs for creation of the Collaboration Plan and the Team Building Plan']],
		[['<a href="/processus/p08_4">8.4 Develop Epic(s)</a>'],['Ensures a clear understanding of Epic(s) and Personas']],
		[['<a href="/processus/p08_5">8.5 Prioritized Product Backlog</a>'],['Understands the User Stories in the Prioritized Product Backlog']],
		[['<a href="/processus/p08_6">8.6 Conduct Release Planning</a>'],['Agrees with other Scrum Core Team members on the Length of Sprint','Seeks clarification on new products or changes in the existing products, if any, in the refined Prioritized Product Backlog']],
		[['<a href="/processus/p09_1">9.1 Create User Stories</a>'],['Provides inputs to the Product Owner on creation of User Stories']],
		[['<a href="/processus/p09_2">9.2 Approve, Estimate and Commit User Stories</a>'],['Estimates User Stories approved by the Product Owner','Commits User Stories to be done in a Sprint']],
		[['<a href="/processus/p09_3">9.3 Create Tasks</a>'],['Develops Task List based on agreed User Stories and dependencies']],
		[['<a href="/processus/p09_4">9.4 Estimate Tasks</a>'],['Estimates effort for tasks identified and if necessary, updates the Task List']],
		[['<a href="/processus/p09_5">9.5 Create Sprint Backlog</a>'],['Develops the Sprint Backlog and the Sprint Burndown Chart']],
		[['<a href="/processus/p10_1">10.1 Create Deliverables</a>'],['Creates Deliverables','Identifies risks and implements risk mitigation actions, if any','Updates Impediment Log and dependencies']],
		[['<a href="/processus/p10_2">10.2 Conduct Daily Standup</a>'],['Updates Burndown Chart, Scrumboard, and Impediment Log','Discusses issues faced by individual members and seeks solutions to motivate the team','Identifies risks, if any','Submits Change Requests, if required']],
		[['<a href="/processus/p10_3">10.3 Groom Prioritized Product Backlog</a>'],['Participates in Prioritized Product Backlog Review Meetings']],
		[['<a href="/processus/p11_1">11.1 Convene Scrum of Scrums</a>'],['Provides inputs to Scrum Master for Scrum of Scrums (SoS) Meetings']],
		[['<a href="/processus/p11_2">11.2 Demonstrate and Validate Sprints</a>'],['Demonstrates completed deliverables to the Product Owner for approval']],
		[['<a href="/processus/p11_3">11.3 Retrospect Sprint</a>'],['Identifies improvement opportunities, if any, from the current Sprint and agrees on any actionable improvements for the next Sprint']],
		[['<a href="/processus/p12_2">12.2 Retrospect Project</a>'],['Participates in the Retrospect Project Meeting']]
	]
};

var txtTeam = {
	id: 'org_22',
	title: 'Scrum Team',
	overview: {
		title: 'Overview',
		comment: [
			'The Scrum Team is sometimes referred to as the Development Team since they are responsible for developing the product, service, or other result. It consists of a group of individuals who work on the User Stories in the Sprint Backlog to create the Deliverables for the project.'
		]
	},
	table: org_persT,
	perso: org_perso,
	size: org_size
};

var org_ex1 = {
	id: 'org_23',
	title: 'Example 1: Construction Company',
	comment: [
		'Project—Construction of a house',
		'Program—Construction of a housing complex',
		'Portfolio—All the housing projects of the company'
	]
};

var org_ex2 = {
	id: 'org_24',
	title: 'Example 2: Aerospace Organization',
	comment: [
		'Project—Building the launch vehicle',
		'Program—Successful launch of a satellite',
		'Portfolio—All the active satellite programs'
	]
};

var org_ex3 = {
	id: 'org_25',
	title: 'Example 3: Information Technology (IT) Company',
	comment: [
		'Project—Development of the shopping cart module',
		'Program—Development of a fully functional e-commerce website',
		'Portfolio—All the websites developed by the company so far'
	]
};

var org_defPortfolio = {
	id: 'org_26',
	title: 'Definition of Project, Program, and Portfolio',
	stitle: 'definition',
	comment: [
		'<b>Project</b>—A project is a collaborative enterprise to either create new products or services or to deliver results as defined in the Project Vision Statement. Projects are usually impacted by constraints of time, cost, scope, quality, people and organizational capabilities. The objective of the project team is to create Deliverables as defined in Prioritized Product Backlog.',
		'<b>Program</b>—A program is a group of related projects, with the objective to deliver business outcomes as defined in the Program Vision Statement. The Prioritized Program Backlog incorporates the Prioritized Product Backlogs for all the projects in the program.',
		'<b>Portfolio</b>—A portfolio is a group of related programs, with the objective to deliver business outcomes as defined in the Portfolio Vision Statement. The Prioritized Portfolio Backlog incorporates the Prioritized Program Backlogs for all the programs in the portfolio.',
		'The following are examples of projects, programs, and portfolios from different industries and sectors:'
	],
	examples: [
		org_ex1,
		org_ex2,
		org_ex3
	]
};

var org_sos = {
	id: 'org_27',
	title: 'Scrum of Scrums (SoS) Meeting',
	comment: [
		'A Scrum of Scrums Meeting is an important element when scaling Scrum to large projects. Typically, there is one representative in the meeting from each Scrum Team—usually the Scrum Master—but it is also common for anyone from the Scrum Team to attend the meeting if required. This meeting is usually facilitated by the Chief Scrum Master and is intended to focus on areas of coordination and integration between the different Scrum Teams. This meeting is conducted at predetermined intervals or when required by the Scrum Teams.',
		'In organizations that have several Scrum Teams working on portions of a project simultaneously, the SoS Meeting can be scaled up another level to what is referred to as a Scrum of Scrum of Scrums Meeting. In this situation, an SoS Meeting is held to coordinate each group of Scrum Teams working on portions of a related project and then a Scrum of Scrum of Scrums Meeting may be held to coordinate and integrate projects at a higher level. Teams have to carefully evaluate the benefits of having Scrum of Scrum of Scrums meetings, as the third layer adds a significant amount of logistical complexity.',
		'In this example, above, there are six Scrum Teams working simultaneously. Scrum Teams A, B, and C are working on portions of a related project while Scrum Teams D, E, and F are working on portions of another related project. A Scrum of Scrums Meeting is held to coordinate the interdependencies between the related projects. A Scrum of Scrums of Scrums Meeting may then be conducted to coordinate and manage dependencies across all projects.'
	]
};

var org_project = {
	id: 'org_28',
	title: 'Scrum in Projects',
	stitle: 'project',
	comment: [
			'Since Scrum favors small teams, one may think that this method can only be used on small projects, but this is not the case. Scrum can also be used effectively on large-scale projects. When more than ten people are required to carry out the work, multiple Scrum Teams may be formed. The project team consists of multiple Scrum Teams working together to create Deliverables and Product Releases, so as to achieve outcomes desired for the overall project.',
			'Since a project can have multiple Scrum Teams working in parallel, coordination between different teams becomes important. The Scrum Teams usually communicate and coordinate with each other in a variety of ways, but the most common approach is known as a Scrum of Scrums (SoS) Meeting. Members representing each Scrum Team come together to discuss progress, issues and to coordinate activities between teams. These meetings are similar in format to the Daily Standup Meetings; however, the frequency of the Scrum of Scrums could be at predetermined intervals or coordinated as required by the different Scrum Teams.'
		],
	sos: org_sos,
	image: '../images/figure_3_4.png'
};

var org_folios = {
	id: 'org_29',
	title: 'Portfolios',
	comment: [
		'In portfolios, important roles to manage Scrum portfolios are:',
		'<b>1. Portfolio Product Owner</b>—Defines the strategic objectives and priorities for the portfolio.',
		'<b>2. Portfolio Scrum Master</b>—Solves problems, removes impediments, facilitates, and conducts meetings for the portfolio.',
		'These roles are similar to those of the Product Owner and Scrum Master except they meet the needs of their portfolio or company rather than those of a single Scrum Team.'
	]
};

var org_programs = {
	id: 'org_30',
	title: 'Programs',
	comment: [
		'In programs, important roles to manage Scrum programs are:',
		'<b>1. Program Product Owner</b>—Defines the strategic objectives and priorities for the program.',
		'<b>2. Program Scrum Master</b>—Solves problems, removes impediments, facilitates, and conducts meetings for the program.',
		'These roles are similar to those of the Product Owner and Scrum Master except they meet the needs of their program or business unit rather than those of a single Scrum Team.'
	],
	image: '../images/figure_3_5.png'
};

var org_workingwith = {
	id: 'org_31',
	title: 'Working with Portfolio and Program Teams',
	comment: [
		'When applying Scrum to manage projects within the context of a program or portfolio, it is strongly recommended that the general principles of Scrum presented in this publication are adhered to. It is understood though, that in order to accommodate the overall program or portfolio activities and interdependencies, minor adjustments to the set of tools, as well as the organizational structure may be required. If the Scrum Guidance Body exists, it may be responsible to scrutinize the organization at different levels to understand and define appropriate application of Scrum, and to act as a consulting body for everyone working on a project, program, or portfolio.',
		'Portfolios and programs have separate teams with different sets of objectives. Program management teams aim to deliver capabilities and realize certain goals that contribute toward the achievement of specific program objectives. In contrast, the portfolio team has to balance the objectives of various programs to achieve the strategic objectives of the organization as a whole.'
	]
};

var org_managing = {
	id: 'org_32',
	title: 'Managing Communication with Portfolio and Program Teams',
	comment: [
		'The problems and issues faced when using Scrum within a program or portfolio primarily involve coordination across numerous teams. This can lead to failure if not carefully managed. Tools used for communication need to be scaled to match the requirements of the many teams involved in a program or portfolio. Each Scrum Team must address not only internal communications, but also external communications with other teams and the relevant stakeholders of the program or portfolio.'
		]
};

var org_portfolio = {
	id: 'org_33',
	title: 'Scrum in Portfolios and Programs',
	stitle: 'portfolio',
	comment: [
		org_folios,
		org_programs,
		org_workingwith,
		org_managing
	]
};

var org_involvement = {
	id: 'org_34',
	title: 'Maintaining Stakeholder Involvement',
	stitle: 'involvement',
	comment: [
		'Scrum requires complete support from the project stakeholders. The responsibility for keeping stakeholders engaged lies with the Product Owner. The following are actions recommended for maintaining stakeholder engagement and support:',
		'* Ensure effective collaboration and stakeholder involvement in the project',
		'* Continually assess business impact',
		'* Maintain regular communication with stakeholders',
		"* Manage stakeholders' expectations",
		'One key stakeholder is the sponsor—the individual who provides the funding and other resources for a project. Sponsors want to understand the financial bottom line related to a product or service and are typically more concerned with final outcomes rather than with individual tasks.',
		'It is important that the sponsors who are funding the project have clarity on the following issues:',
		'* Benefits of implementing Scrum',
		'* Target deadlines and estimated costs of Scrum projects',
		'* Overall risks involved in Scrum projects and the steps to mitigate them',
		'* Expected release dates and final Deliverables'
	]
}

var txtPortfolio = {
	id: 'org_35',
	title: 'Org: Scrum in Projects, Programs, and Portfolios',
	definition: org_defPortfolio,
	project: org_project,
	portfolio: org_portfolio,
	involvement: org_involvement
};

var org_summary = {
	id: 'org_36',
	title: 'Summary of Responsibilities',
	stitle: 'summary',
	nbcol: 2,
	head: ['Roles','Responsibilities'],
	body: [
		[['Scrum Guidance Body'],['Establishes overall guidelines and metrics for developing role descriptions for Scrum Team members','Acts as a consultant to projects across organization at different levels','Understands and defines appropriate levels of grouping, roles, and meetings for Scrum projects']],
		[['Portfolio Product Owner'],['Defines the strategic objectives and priorities for portfolios']],
		[['Portfolio Scrum Master'],['Solves problems and coordinates meetings for portfolios']],
		[['Program Product Owner'],['Defines the strategic objectives and priorities for programs']],
		[['Program Scrum Master'],['Solves problems and coordinates meetings for pro']],
		[['Stakeholder(s)'],['Is a collective term that includes customers, users, and sponsors','Frequently interfaces with the Product Owner, Scrum Master, and Scrum Team to provide them inputs and facilitates creation of the Deliverables of the project.']],
		[['Product Owner'],['Creates the project’s initial overall requirements and gets the project rolling','Appoints appropriate people to the Scrum Master and Scrum Team roles','Provides the initial and ongoing financial resources for the project','Determines Product Vision','Assesses the viability and ensures delivery of the product or service','Ensures transparency and clarity of Prioritized Product Backlog Items','Decides minimum marketable release content','Provides Acceptance Criteria for the User Stories to be developed in a Sprint','Inspects deliverables','Decides Sprint duration']],
		[['Scrum Master'],['Ensures that Scrum processes are correctly followed by all team members including the Product Owner','Ensures that development of the product or service is progressing smoothly and the Scrum Team members have all the necessary tools to get the work done','Oversees Release Planning Meeting and schedules other meetings']],
		[['Scrum Team',],['Takes collective responsibility and ensures that the project deliverables are created per requirements','Assures Product Owner and Scrum Master that the allocated work is being performed according to plan']]
	]
};

var txtSummary = {
	id: 'org_37',
	title: 'Org: Summary of Responsibilities',
	table: org_summary,
};

var txtVersus = {
	id: 'org_38',
	title: 'Org: Scrum vs. Traditional Project Management',
	comment: [
		'Organization structure and definition of roles and associated responsibilities are some of the areas where Scrum differs in a major way from traditional project management methods.',
		'In traditional project management methods, the organization structure is hierarchical and authority for all aspects of the project is delegated from higher level to lower (e.g., project sponsor delegates authority to project manager and the project manager delegates authority to team members). Traditional project management methods emphasize on individual accountability for project responsibilities rather than group ownership or accountability. Any deviation from the delegated authority is looked at as a sign of issues and may be escalated to the higher level in the organization hierarchy. It is usually the project manager who is responsible for successful completion of the project and he or she takes decisions on various aspects of the project, including initiating, planning, estimating, executing, monitoring and controlling, and closing.',
		'The emphasis in Scrum is on self-organization and self-motivation where the team assumes greater responsibility in making a project successful. This also ensures that there is team buy-in and shared ownership. This, in turn, results in team motivation leading to an optimization of team efficiencies. The Product Owner, Scrum Master, and the Scrum Team work very closely with relevant Stakeholder(s) for refining requirements as they go through the Develop Epic(s), Create Prioritized Product Backlog, and Create User Stories processes. This ensures that there is no scope for isolated planning in Scrum. Team experience and expertise in product development are used to assess the inputs needed to plan, estimate and execute project work. Collaboration among Scrum Core Team members ensures that the project is carried out in an innovative and creative environment that is conducive to growth and team harmony.'
	]
};

var org_tuckman = {
	id: 'org_39',
	title: 'Tuckman’s Model of Group Dynamics',
    stitle: 'Tuckman',
	comment: [
		'The Scrum approach and method may initially seem quite different and difficult for a new Scrum Team. A new Scrum Team, like any other new team, generally evolves through a four-stage process during its first Scrum project. This process is known as Tuckman’s Model of group dynamics (Tuckman, 1965). The main idea is that the four stages—Forming, Storming, Norming and Performing—are imperative for a team to develop by mitigating problems and challenges, finding solutions, planning work, and delivering results.',
		'The four stages of the model are the following:',
		'<b>1. Forming</b>—This is often experienced as a fun stage because everything is new and the team has not yet encountered any difficulties with the project.',
		'<b>2. Storming</b>—During this stage, the team tries to accomplish the work; however, power struggles may occur, and there is often chaos or confusion among team members.',
		'<b>3. Norming</b>—This is when the team begins to mature, sort out their internal differences, and find solutions to work together. It is considered a period of adjustment.',
		'<b>4. Performing</b>—During this stage, the team becomes its most cohesive, and it operates at its highest level in terms of performance. The members have evolved into an efficient team of peer professionals who are consistently productive.'
	],
	image: '../images/figure_3_6.png'
};

var org_conflict = {
	id: 'org_40',
	title: 'Conflict Management',
    stitle: 'Conflict',
	comment: [
		'Organizations applying the Scrum framework encourage an open environment and dialogue among employees. Conflicts among Scrum Team members are generally resolved independently, with little or no involvement from management or others outside the Scrum Team.',
		'Conflict can be healthy when it promotes team discussions and encourages debates, as this usually results in benefits for the project and the respective team members. It is therefore important that the resolution of conflicts be encouraged, promoting an open environment where team members feel welcome to express their opinions and concerns with each other and about the project, and ultimately agree on what is to be delivered and how the work in each Sprint will be performed.',
		'Conflict management techniques are used by team members to manage any conflicts that arise during a Scrum project. Sources of conflict evolve primarily due to schedules, priorities, resources, reporting hierarchy, technical issues, procedures, personality, and costs.'
	]
};

var org_techniques = {
	id: 'org_41',
	title: 'Conflict Management Techniques',
    stitle: 'Techniques',
	comment: [
		'Usually there are four approaches to managing conflict in an organization applying Scrum processes:',
		'1. Win-Win',
		'2. Lose-Win',
		'3. Lose-Lose',
		'4. Win-Lose',
		'<b>Win-Win</b>: It is usually best for team members to face problems directly with a cooperative attitude and an open dialogue to work through any disagreements to reach consensus. This approach is called Win-Win. Organizations implementing Scrum should promote an environment where employees feel comfortable to openly discuss and confront problems or issues and work through them to reach Win-Win outcomes.',
		'<b>Lose-Win</b>: Some team members may at times feel that their contributions are not being recognized or valued by others, or that they are not being treated equally. This may lead them to withdraw from contributing effectively to the project and agree to whatever they are being told to do, even if they are in disagreement. This approach is called Lose-Win. This situation may happen if there are members in the team (including managers) who use an authoritative or directive style of issuing orders and/or do not treat all team members equally. This approach is not a desired conflict management technique for Scrum projects, since active contribution of every member of the team is mandatory for successful completion of each Sprint. The Scrum Master should encourage the involvement of any team members who appear to be withdrawing from conflict situations. For example, it is important for all team members to speak and contribute at each Daily Standup Meeting so that any issues or impediments can be made known and managed effectively.',
		'<b>Lose-Lose</b>: In conflict situations, team members may attempt to bargain or search for solutions that bring only a partial degree or temporary measure of satisfaction to the parties in a dispute. This situation could happen in Scrum Teams where team members try to negotiate for suboptimal solutions to a problem. This approach typically involves some “give and take” to satisfy every team member—instead of trying to solve the actual problem. This generally results in an overall Lose-Lose outcome for the individuals involved and consequently the project. The Scrum Team should be careful to ensure that team members do not get into a Lose-Lose mentality. Scrum Daily Standup and other Scrum meetings are conducted to ensure that actual problems get solved through mutual discussions.',
		'<b>Win-Lose</b>: At times, a Scrum Master or another influential team member may believe he or she is a de facto leader or manager and try to exert their viewpoint at the expense of the viewpoints of others. This conflict management technique is often characterized by competitiveness and typically results in a Win-Lose outcome. This approach is not recommended when working on Scrum projects, because Scrum Teams are by nature self-organized and empowered, with no one person having true authority over another team member. Although the Scrum Team may include persons with different levels of experience and expertise, every member is treated equally and no person has the authority to be the primary decision maker.'
	]
};

var org_leadership = {
	id: 'org_42',
	title: 'Leadership Styles',
    stitle: 'Leadership',
	comment: [
		'Leadership styles vary depending on the organization, the situation, and even the specific individuals and objectives of the Scrum project. Some common leadership styles are as follows:',
		'<b>Servant Leadership</b>—Servant leaders employ listening, empathy, commitment, and insight while sharing power and authority with team members. Servant leaders are stewards who achieve results by focusing on the needs of the team. This style is the embodiment of the Scrum Master role.',
		'<b>Delegating</b>—Delegating leaders are involved in the majority of decision making; however, they delegate some planning and decision-making responsibilities to team members, particularly if they are competent to handle the assigned tasks. This leadership style is appropriate in situations where the leader is in tune with specific project details, and when time is limited.',
		'<b>Autocratic</b>—Autocratic leaders make decisions on their own, allowing team members little, if any involvement or discussion before a decision is made. This leadership style should only be used on rare occasions.',
		'<b>Directing</b>— Directing leaders instruct team members which tasks are required, when they should be performed and how they should be performed.',
		'<b>Laissez Faire</b>—With this leadership style, the team is left largely unsupervised, so the leader does not interfere with their daily work activities. Often this style leads to a state of anarchy.',
		'<b>Coaching/Supportive</b>—Coaching and supportive leaders issue instructions and then support and monitor team members through listening, assisting, encouraging, and presenting a positive outlook during times of uncertainty.',
		'<b>Task-Oriented</b>—Task-oriented leaders enforce task completion and adherence to deadlines.',
		'<b>Assertive</b>—Assertive leaders confront issues and display confidence to establish authority with respect.',
		''
	]
};

var org_servant = {
	id: 'org_43',
	title: 'Servant Leadership',
	comment: [
		'The preferred leadership style for Scrum projects is Servant Leadership. This term was first described by Robert K. Greenleaf in an essay entitled The Servant as Leader. Below is an excerpt where he explains the concept:',
		'The servant-leader is servant first…It begins with the natural feeling that one wants to serve, to serve first. Then conscious choice brings one to aspire to lead. That person is sharply different from one who is leader first, perhaps because of the need to assuage an unusual power drive or to acquire material possessions…The leader-first and the servant-first are two extreme types. Between them there are shadings and blends that are part of the infinite variety of human nature….',
		'The difference manifests itself in the care taken by the servant-first to make sure that other people’s highest priority needs are being served. The best test, and difficult to administer, is: Do those served grow as persons? Do they, while being served, become healthier, wiser, freer, more autonomous, more likely themselves to become servants? And, what is the effect on the least privileged in society? Will they benefit or at least not be further deprived? (Greenleaf 1970, 6)',
		'Elaborating on the writings of Greenleaf, Larry Spears identifies ten traits that every effective servant-leader should possess:',
		'1. <b>Listening</b>—Servant leaders are expected to listen intently and receptively to what is being said, or not said. They are able to get in touch with their inner voice to understand and reflect on their own feelings.',
		'2. <b>Empathy</b>—Good servant leaders accept and recognize individuals for their special and unique skills and abilities. They assume workers have good intentions and accept them as individuals, even when there are behavioral or performance issues.',
		'3. <b>Healing</b>—The motivation and potential to heal oneself and one’s relationship with others is a strong trait of servant leaders. Servant leaders recognize and take the opportunity to help their colleagues who are experiencing emotional pain.',
		'4. <b>Awareness</b>—Awareness and particularly self-awareness is a trait of servant leaders. This allows them to better understand and integrate issues such as those related to ethics, power, and values.',
		'5. <b>Persuasion</b>—Servant leaders use persuasion, rather than their positional authority to gain group consensus and make decisions. Rather than forcing compliance and coercion as is typical in some authoritarian management styles, servant leaders practice persuasion.',
		'6. <b>Conceptualization</b>—The ability to view and analyze problems (in an organization) from a broader conceptual and visionary perspective, rather than focusing on merely the immediate short-term goals, is a unique skill of good servant leaders.',
		'7. <b>Foresight</b>—Their intuitive minds allow servant leaders to use and apply past lessons and present realities to foresee the outcome of current situations and decisions.',
		'8. <b>Stewardship</b>—Stewardship demands a commitment to serving others. Servant leaders prefer persuasion over control to ensure that they gain the trust of others in the organization.',
		'9. <b>Commitment to the growth of others</b>—Servant leaders have a deep commitment to the growth of people within their organization. They take on the responsibility of nurturing the personal, professional, and spiritual growth of others (e.g., providing access to resources for personal and professional development, encouraging workers to participate in decision making).',
		'10. <b>Building community</b>—Servant leaders are interested in building communities within a working environment, particularly given the shift in societies away from smaller communities to large institutions shaping and controlling human lives.',
		'Scrum believes that all leaders of Scrum projects (including the Scrum Master and Product Owner) should be servant-leaders who have the above traits.'
	]
};

var org_ldrshp = {
	id: 'org_44',
	title: 'Servant Leadership',
	stitle: 'Leadership',
	comment: [
		org_leadership,
		org_servant
	]
};

var org_maslow = {
	id: 'org_45',
	title: 'Maslow’s Hierarchy of Needs Theory',
    stitle: 'Maslow',
	comment: [
		'Maslow (1943) presented a need hierarchy which recognizes that different people are at different levels in their needs. Usually people start out looking for physiological needs and then progressively move up the needs hierarchy.',
		'To be successful, a Scrum Team needs both core and non-core team members who have reached the esteem or self-actualization levels. The concept of self-organizing teams, which is a key principle in Scrum, requires team members to be self-motivated, and to participate and contribute fully towards meeting the project goals.',
		'As a leader, the Scrum Master needs to understand where each person on the team is relative to the pyramid. This understanding will help to determine the best approach in motivating each individual.',
		'Additionally, everyone fluctuates up and down the levels in the needs hierarchy throughout life due to their own motivation and efforts to move up the hierarchy or sometimes due to factors beyond their control that may push them down. The Scrum Master’s goal is to work with individuals on the team to build their skills and knowledge and help them move up the needs hierarchy. This support results in a team that consists of individuals who are motivated and strong contributors to the project and to the organization as a whole.'
	],
	image: '../images/figure_3_7.png'
};

var org_xy = {
	id: 'org_46',
	title: 'Theory X and Theory Y',
    stitle: 'XY',
	comment: [
		'Douglas McGregor (1960) proposed two management theories:',
		'<b>* Theory X</b>—Theory X leaders assume employees are inherently unmotivated and will avoid work if possible, warranting an authoritarian style of management.',
		'<b>* Theory Y</b>—Theory Y leaders, on the other hand, assume employees are self-motivated and seek to accept greater responsibility. Theory Y involves a more participative management style.',
		"Scrum projects are not likely to be successful with organizations that have Theory X leaders in the roles of Scrum Master or Product Owner. All leaders in Scrum projects should subscribe to Theory Y, whereby they view individuals as important assets and work towards developing their team members' skills and empowering their team members while expressing appreciation for the work the team has completed to accomplish the project objectives."
	]
};

var txtTheories = {
	id: 'org_47',
	title: 'Popular HR Theories and their Relevance to Scrum',
	comment: [
	],
	tuckman: org_tuckman,
	conflict: org_conflict,
	techniques: org_techniques,
	leadership: org_ldrshp,
	maslow: org_maslow,
	xy: org_xy
};

exports.txtIntro = txtIntro; // org_01
exports.txtRoles = txtRoles; // org_02
exports.txtProject = txtProject; // org_11
exports.txtOwner = txtOwner; // org_15
exports.txtMaster = txtMaster; // org_18
exports.txtTeam = txtTeam; // org_22
exports.txtPortfolio = txtPortfolio; // org_35
exports.txtSummary = txtSummary; // org_37
exports.txtVersus = txtVersus; // org_38
exports.txtTheories = txtTheories; // org_47

exports.org_owner = org_owner; // org_03
exports.org_master = org_master // org_04
exports.org_team = org_team // org_05
exports.org_core = org_core // org_06
exports.org_stakeholder = org_stakeholder // org_07
exports.org_vendors = org_vendors // org_08
exports.org_SGB = org_SGB // org_09
exports.org_noncore = org_noncore // org_10
exports.org_voc = org_voc // org_12
exports.org_chiefPO = org_chiefPO // org_13
exports.org_resPO = org_resPO // org_14
exports.org_chiefSM = org_chiefSM // org_16
exports.org_respSM = org_respSM // org_17
exports.org_perso = org_perso // org_19
exports.org_size = org_size // org_20
exports.org_persT = org_persT // org_21
exports.org_ex1 = org_ex1 // org_23
exports.org_ex2 = org_ex2 // org_24
exports.org_ex3 = org_ex3 // org_25
exports.org_defPortfolio = org_defPortfolio // org_26
exports.org_sos = org_sos // org_27
exports.org_project = org_project // org_28
exports.org_folios = org_folios // org_29
exports.org_programs = org_programs // org_30
exports.org_workingwith = org_workingwith // org_31
exports.org_managing = org_managing // org_32
exports.org_portfolio = org_portfolio // org_33
exports.org_involvement = org_involvement // org_34
exports.org_summary = org_summary // org_36
exports.org_tuckman = org_tuckman // org_39
exports.org_conflict = org_conflict // org_40
exports.org_techniques = org_techniques // org_41
exports.org_leadership = org_leadership // org_42
exports.org_servant = org_servant // org_43
exports.org_ldrshp = org_ldrshp // org_44
exports.org_maslow = org_maslow // org_45
exports.org_xy = org_xy // org_46