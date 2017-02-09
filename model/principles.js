
var txtIntroduction = {
    id: 'prin_01',
    title: 'Principles introduction',
    comment: [
        'Scrum principles are the foundation on which the Scrum framework is based. The principles of Scrum can be applied to any type of project or organization, and they must be adhered to in order to ensure appropriate application of Scrum. The aspects and processes of Scrum can be modified to meet the requirements of the project, or the organization using it, but Scrum principles are non-negotiable and must be applied as described in the framework presented in A Guide to the Scrum Body of Knowledge (SBOK™ Guide).',
        'Keeping the principles intact and using them appropriately instills confidence to the user of the Scrum framework with regard to attaining the objectives of the project. Principles are considered to be the core guidelines for applying the Scrum framework.',
        '<b>Principles</b>, as defined in the SBOK™ Guide, are applicable to the following:',
        '•	Portfolios, programs, and/or projects in any industry',
        '•	Products, services, or any other results to be delivered to stakeholders',
        '•	Projects of any size or complexity',
        'The term “product” in the SBOK™ Guide may refer to a product, service, or other deliverable. Scrum can be applied effectively to any project in any industry—from small projects or teams with as few as six team members to large, complex projects with up to several hundred team members.'
    ]
};

var prin_transparency = {
    id: 'prin_02',
    title: 'Transparency',
    comment: [
        'Transparency allows all facets of any Scrum process to be observed by anyone. This promotes an easy and transparent flow of information throughout the organization and creates an open work culture. In Scrum, transparency is depicted through the following:',
        '•	A Project Vision Statement which can be viewed by all stakeholders and the Scrum Team',
        '•	An open Prioritized Product Backlog with prioritized User Stories that can be viewed by everyone, both within and outside the Scrum Team',
        '•	A Release Planning Schedule which may be coordinated across multiple Scrum Teams',
        '•	Clear visibility into the team’s progress through the use of a Scrumboard, Burndown Chart, and other information radiators',
        '•	Daily Standup Meetings conducted during the Conduct Daily Standup process, in which all team members report what they have done the previous day, what they plan to do today, and any problems preventing them from completing their tasks in the current Sprint',
        '•	Sprint Review Meetings conducted during the Demonstrate and Validate Sprint process, in which the Scrum Team demonstrates the potentially shippable Sprint Deliverables to the Product Owner and Stakeholders'
    ],
    image: '../images/transparency.png'
};

var prin_inspection = {
    id: 'prin_03',
    title: 'Inspection',
    comment: [
            'Inspection in Scrum is depicted through the following:',
            '•	Use of a common Scrumboard and other information radiators which show the progress of the Scrum Team on completing the tasks in the current Sprint.',
            '•	Collection of feedback from the customer and other stakeholders during the Develop Epic(s), Create Prioritized Product Backlog, and Conduct Release Planning processes.',
            '•	Inspection and approval of the Deliverables by the Product Owner and the customer in the Demonstrate and Validate Sprint process.'
    ],
    image: '../images/inspection.png'  
};

var prin_adaptation = {
    id: 'prin_04',
    title: 'Adaptation',
    part1: {
		comment: [
            'Adaptation happens as the Scrum Core Team and Stakeholders learn through transparency and inspection and then adapt by making improvements in the work they are doing. Some examples of adaptation include:',
            '•	In Daily Standup Meetings, Scrum Team members openly discuss impediments to completing their tasks and seek help from other team members. More experienced members in the Scrum Team also mentor those with relatively less experience in knowledge of the project or technology.',
            '•	Risk identification is performed and iterated throughout the project. Identified risks become inputs to several Scrum processes including Create Prioritized Product Backlog, Groom Prioritized Product Backlog, and Demonstrate and Validate Sprint.',
            '•	Improvements can also result in Change Requests, which are discussed and approved during the Develop Epic(s), Create Prioritized Product Backlog, and Groom Prioritized Product Backlog processes.',
            '•	The Scrum Guidance Body interacts with Scrum Team members during the Create User Stories, Estimate Tasks, Create Deliverables, and Groom Prioritized Product Backlog processes to offer guidance and also provide expertise as required.',
            '•	In the Retrospect Sprint process, Agreed Actionable Improvements are determined based on the outputs from the Demonstrate and Validate Sprint process.',
            '•	In Retrospect Project Meeting, participants document lessons learned and perform reviews looking for opportunities to improve processes and address inefficiencies.'
		],
		image: '../images/adaptation.png'
	},
    part2: {
		comment: [
            'With other methods, like the traditional Waterfall model, considerable planning needs to be done in advance and the customer generally does not review product components until near the end of a phase, or the end of the entire project. This method often presents huge risks to the project’s success because it may have more potential for significantly impacting project delivery and customer acceptance. The customer’s interpretation and understanding of the finished product may be very different from what was actually understood and produced by the team and this may not be known until very late in the project’s development.'
		],
		image: '../images/challenges.png'
	}
};

var prin_epc = {
    id: 'prin_23',
    stitle: 'EPC',
    title: 'Empirical Process Control',
    comment: [
        'In Scrum, decisions are made based on observation and experimentation rather than on detailed upfront planning. Empirical process control relies on the three main ideas of:',
        '* <b>Transparency</b>',
        '* <b>Inspection</b>',
        '* <b>Adaptation</b>'
    ]
};

var txtEpc = {
    id: 'prin_05',
    stitle: 'EPC',
    title: 'Empirical Process Control',
    epc: prin_epc,
    Transparency: prin_transparency,
    Inspection: prin_inspection,
    Adaptation: prin_adaptation
};

var prin_benefits = {
    id: 'prin_06',
    title: 'Benefits',
    comment: [
        'Self-organization as an essential principle in Scrum leads to the following:',
        '•	Team buy-in and shared ownership',
        '•	Motivation, which leads to an enhanced performance level of the team',
        '•	Innovative and creative environment conducive to growth',
        'Self-organization does not mean that team members are allowed to act in any manner that they want to. It just means that once the Product Vision is defined in the Create Project Vision process, the Product Owner, Scrum Master, and Scrum Team get identified. Also the Scrum Core Team itself works very closely with relevant Stakeholder(s) for refining requirements better as they go through the Develop Epic(s) and Create User Stories process. Team expertise is used to assess the inputs needed to execute the planned work of the project. This judgment and expertise are applied to all technical and management aspects of the project during the Create Deliverables process.',
        'Although prioritization is primarily done by the Product Owner who represents the Voice of Customer, the self-organized Scrum Team is involved in task breakdown and estimation during the Create Tasks and Estimate Tasks processes. During these processes, each team member is responsible for determining what work he or she will be doing. During the execution of a Sprint, if team members need any help with completing their tasks, Scrum addresses this through the regular interaction mandatory with the Daily Standup Meetings. The Scrum Team itself interacts with other teams through the Scrum of Scrums (SoS) Meetings and can look for additional guidance as required from the Scrum Guidance Body.',
        'Finally, the Scrum Team and Scrum Master work closely to demonstrate the product increment created during the Sprint in the Demonstrate and Validate Sprint process where properly completed deliverables are accepted. Since the Deliverables are potentially shippable, (and the Prioritized Product Backlog is prioritized by User Stories in the order of value created by them), the Product Owner and the customer can clearly visualize and articulate the value being created after every Sprint; and Scrum Teams in turn have the satisfaction of seeing their hard work being accepted by the customer and other stakeholders.'
    ]
}; // prin_06

var prin_goals = {
    id: 'prin_07',
    title: 'Goals',
    comment: [
        'The chief goals of self-organizing teams are as follows:',
        '•	Understand the Project Vision and why the project delivers value to the organization',
        '•	Estimate User Stories during the Approve, Estimate, and Commit User Stories process and assign tasks to themselves during the Create Sprint Backlog process',
        '•	Create tasks independently during the Create Tasks process',
        '•	Apply and leverage their expertise from being a cross-functional team to work on the tasks during the Create Deliverables process',
        '•	Deliver tangible results which are accepted by the customer and other stakeholders during the Demonstrate and Validate Sprint process',
        '•	Resolve individual problems together by addressing them during Daily Standup Meetings',
        '•	Clarify any discrepancies or doubts and be open to learning new things',
        '•	Upgrade knowledge and skill on a continuous basis through regular interactions within the team',
        '•	Maintain stability of team members throughout the duration of the project by not changing members, unless unavoidable'
    ],
    image: '../images/selforg.png'
}; // prin_07

var prin_selforg = {
    id: 'prin_24',
    title: 'Self-organization',
    stitle: 'Overview',
    comment: [
        'Scrum believes that employees are self-motivated and seek to accept greater responsibility. So, they deliver much greater value when self-organized.',
        'The preferred leadership style in Scrum is “servant leadership”, which emphasizes achieving results by focusing on the needs of the Scrum Team. See section 3.10.3 for a discussion of various leadership and management styles.'
    ]
	
}; // prin_24

var txtSelforg = {
    id: 'prin_08',
    title: 'Self-organization',
    overview: prin_selforg,
    benefits: prin_benefits,
    goals: prin_goals
}; // prin_08

var prin_colBenefits = {
    id: 'prin_09',
    title: 'Benefits',
    comment: [
        'The Agile Manifesto (Fowler & Highsmith, 2001) stresses “customer collaboration over contract negotiation.” Thus, the Scrum framework adopts an approach in which the Scrum Core Team members (Product Owner, Scrum Master, and Scrum Team), collaborate with each other and the stakeholders to create the deliverables that provide greatest possible value to the customer. This collaboration occurs throughout the project.',
        'Collaboration ensures that the following project benefits are realized:',
        '1.	The need for changes due to poorly clarified requirements is minimized. For example, during the Create Project Vision, Develop Epic(s), and Create Prioritized Product Backlog processes, the Product Owner collaborates with stakeholders to create the Project Vision, Epic(s), and Prioritized Product Backlog, respectively. This will ensure that there is clarity among Scrum Core Team members on the work that is required to complete the project. The Scrum Team collaborates continuously with the Product Owner and stakeholders through a transparent Prioritized Product Backlog to create the project deliverables. The processes Conduct Daily Standup, Groom Prioritized Product Backlog, and Retrospect Sprint provide scope to the Scrum Core Team members to discuss what has been done and collaborate on what needs to be done. Thus the number of Change Requests from the customer and rework is minimized.',
        '2.	Risks are identified and dealt with efficiently. For example, risks to the project are identified and assessed in the Develop Epic(s), Create Deliverables, and Conduct Daily Standup processes by the Scrum Core Team members. The Scrum meeting tools such as the Daily Standup Meeting, Sprint Planning Meeting, Prioritized Product Backlog Review Meeting, and so on provide opportunities to the team to not only identify and assess risks, but also to implement risk responses to high-priority risks.',
        '3.	True potential of the team is realized. For example, the Conduct Daily Standup process provides scope for the Scrum Team to collaborate and understand the strengths and weaknesses of its members. If a team member has missed a task deadline, the Scrum Team members align themselves collaboratively to complete the task and meet the targets agreed to for completing the Sprint.',
        '4.	Continuous improvement is ensured through lessons learned. For example, the Scrum Team uses the Retrospect Sprint process to identify what went well and what did not go well in the previous Sprint. This provides an opportunity to the Scrum Master to work with the team to rework and improve the team for the next scheduled Sprint. This will also ensure that collaboration is even more effective in the next Sprint.'
    ],
    image: '../images/collaboration.png'
}; // prin_09

var prin_importance = {
	id: 'prin_10',
    title: 'Importance of Colocation',
	stitle: 'Importance',
	comment: [
        'For many of the Scrum practices, high-bandwidth communication is required. To enable this, it is preferred that team members are colocated. Colocation allows both formal and informal interaction between team members. This provides the advantage of having team members always at hand for coordination, problem-solving, and learning. Some of the benefits of colocation are the following:',
        '•	Questions get answered quickly.',
        '•	Problems are fixed on the spot.',
        '•	Less friction occurs between interactions.',
        '•	Trust is gained and awarded much more quickly.',
        'Collaboration tools that can be used for colocated or distributed teams are as follows:'
    ]
}; // prin_10

var prin_colocated = {
	id: 'prin_11',
    title: 'Colocated Teams',
	comment: '1.	<b>Colocated Teams</b> (i.e., teams working in the same office)—In Scrum, it is preferable to have colocated teams. If colocated, preferred modes of communication include face-to-face interactions, Decision Rooms or War Rooms, Scrumboards, wall displays, shared tables, and so on.'
}; // prin_11

var prin_distributed = {
	id: 'prin_12',
    title: 'Distributed Teams',
	comment : '2.	<b>Distributed Teams</b> (i.e., teams working in different physical locations)—Although colocated teams are preferred, at times the Scrum Team may be distributed due to outsourcing, offshoring, different physical locations, work-from-home options, etc. Some tools that could be used for effective collaboration with distributed teams include video conferencing, instant messaging, chats, social media, shared screens, and software tools which simulate the functionality of Scrumboards, wall displays, and so on.'
}; // prin_12

var prin_collab = {
    id: 'prin_25',
    title: 'Collaboration',
    stitle: 'Overview',
    comment: [
        'Collaboration in Scrum refers to the Scrum Core Team working together and interfacing with the stakeholders to create and validate the deliverables of the project to meet the goals outlined in the Project Vision. It is important to note the difference between cooperation and collaboration here. Cooperation occurs when the work product consists of the sum of the work efforts of various people on a team. ',
        'Collaboration occurs when a team works together to play off each other’s inputs to produce something greater.',
        'The core dimensions of collaborative work are as follows:',
        '•	<b>Awareness</b>—Individuals working together need to be aware of each other’s work.',
        '•	<b>Articulation</b>—Collaborating individuals must partition work into units, divide the units among team members, and then after the work is done, reintegrate it.',
        '•	<b>Appropriation</b>—Adapting technology to one’s own situation; the technology may be used in a manner completely different than expected by the designers.'
    ]
}; // prin_25

var txtCollaboration = {
    id: 'prin_13',
    title: 'Collaboration',
    overview: prin_collab,
    benefits: prin_colBenefits,
    importance: prin_importance,
    colocated: prin_colocated,
    distributed: prin_distributed
}; // prin_13

var txtValueBased = {
	id: 'prin_14',
	title: 'Value-based Prioritization',
	overview: {
		title: 'Value-based Prioritization',
		comment: [
		'The Scrum framework is driven by the goal of delivering maximum business value in a minimum time span. One of the most effective tools for delivering the greatest value in the shortest amount of time is prioritization.',
		"Prioritization can be defined as determination of the order and separation of what must be done now, from what needs to be done later. The concept of prioritization is not new to project management. The traditional Waterfall model of project management proposes using multiple task prioritization tools. From the Project Manager’s point of view, prioritization is integral because certain tasks must be accomplished first to expedite the development process and achieve the project goals. Some of the traditional techniques of task prioritization include setting deadlines for delegated tasks and using prioritization matrices.",
		'Scrum, however, uses Value-based Prioritization as one of the core principles that drives the structure and functionality of the entire Scrum framework—it helps projects benefit through adaptability and iterative development of the product or service. More significantly, Scrum aims at delivering a valuable product or service to the customer on an early and continuous basis.',
		'Prioritization is done by the Product Owner when he or she prioritizes User Stories in the Prioritized Product Backlog. The Prioritized Product Backlog contains a list of all the requirements needed to bring the project to fruition.',
		'Once the Product Owner has received the business requirements from the customer and written these down in the form of workable User Stories, he or she works with the customer and sponsor to understand which business requirements provide maximum business value. The Product Owner must understand what the customer wants and values in order to arrange the Prioritized Product Backlog Items (User Stories) by relative importance. Sometimes, a customer may mandate all User Stories to be of high priority. While this might be true, even a list of high-priority User Stories needs to be prioritized within the list itself. Prioritizing a backlog involves determining the criticality of each User Story. High-value requirements are identified and moved to the top of the Prioritized Product Backlog. The processes in which the principle of Value-based Prioritization is put into practice are Create Prioritized Product Backlog and Groom Prioritized Product Backlog.',
		'Simultaneously, the Product Owner must work with the Scrum Team to understand the project risks and uncertainty as they may have negative consequences associated with them. This should be taken into account while prioritizing User Stories on a value-based approach (refer to the Risk chapter for more information). The Scrum Team also alerts the Product Owner of any dependencies that arise out of implementation. These dependencies must be taken into account during prioritization. Prioritization may be based on a subjective estimate of the projected business value or profitability, or it can be based on results and analysis of the market using tools including, but not limited to, customer interviews, surveys, and financial models and analytical techniques.',
		'The Product Owner has to translate the inputs and needs of the project stakeholders to create the Prioritized Product Backlog. Hence, while prioritizing the User Stories in the Prioritized Product Backlog, the following three factors are considered:',
		'1. Value',
		'2. Risk or uncertainty',
		'3. Dependencies',
		'Thus prioritization results in deliverables that satisfies the requirements of the customer with the objective of delivering the maximum business value in the least amount of time.'
		],
		image: '../images/value_based.png'
	}
}; // prin_14

var prin_sprint = {
	id: 'prin_15',
	title: 'Sprint',
	stitle: 'Sprint',
	comment: [
		'A Sprint is a Time-boxed iteration of one to six weeks in duration during which the Scrum Master guides, facilitates, and shields the Scrum Team from both internal and external impediments during the Create Deliverables process. This aids in avoiding vision creep that could affect the Sprint goal. During this time, the team works to convert the requirements in the Prioritized Product Backlog into shippable product functionalities. To get maximum benefits from a Scrum project, it is always recommended to keep the Sprint Time-boxed to 4 weeks, unless there are projects with very stable requirements, where Sprints can extend up to 6 weeks.'
	]
}; // prin_15

var prin_standup = {
	id: 'prin_16',
	title: 'Daily Standup Meeting',
	stitle: 'standup',
	comment: [
		'The Daily Standup Meeting is a short daily meeting, Time-boxed to 15 minutes. The team members get together to report the progress of the project by answering the following three questions:',
		'1. What did I complete yesterday?',
		'2. What will I complete today?',
		'3. What impediments or obstacles (if any) am I currently facing?',
		'This meeting is carried out by the team as part of the Conduct Daily Standup process.'
	]
}; // prin_16

var prin_planning = {
	id: 'prin_17',
	stitle: 'planning',
	title: 'Sprint Planning Meeting',
	comment: [
		'This meeting is conducted prior to the Sprint as part of the Create Sprint Backlog process. It is Time-boxed to eight hours for a one-month Sprint. The Sprint Planning Meeting is divided into two parts:',
		'1. Objective Definition—During the first half of the meeting, the Product Owner explains the highest priority User Stories or requirements in the Prioritized Product Backlog to the Scrum Team. The Scrum Team in collaboration with the Product Owner then defines the Sprint goal.',
		'2. Task Estimation—During the second half of the meeting, the Scrum Team decides “how” to complete the selected Prioritized Product Backlog Items to fulfill the Sprint goal.',
		'At times, the Task Planning Meetings (conducted during the Create Tasks process) and the Task Estimation Meetings (conducted during Estimate Tasks process) are also referred to as Sprint Planning Meetings.'
	]
}; // prin_17

var prin_review = {
	id: 'prin_18',
	stitle: 'review',
	title: 'Sprint Review Meeting',
	comment: [
		'The Sprint Review Meeting is Time-boxed to four hours for a one-month Sprint. During the Sprint Review Meeting that is conducted in the Demonstrate and Validate Sprint process, the Scrum Team presents the deliverables of the current Sprint to the Product Owner. The Product Owner reviews the product (or product increment) against the agreed Acceptance Criteria and either accepts or rejects the completed User Stories.'
	]
}; // prin_18

var prin_retrospect = {
	id: 'prin_19',
	stitle: 'retrospect',
	title: 'Retrospect Sprint Meeting',
	comment: [
		'The Retrospect Sprint Meeting is Time-boxed to 4 hours for a onemonth Sprint and conducted as part of the Retrospect Sprint process. During this meeting, the Scrum Team gets together to review and reflect on the previous Sprint in terms of the processes followed, tools employed, collaboration and communication mechanisms, and other aspects relevant to the project. The team discusses what went well during the previous Sprint and what did not go well, the goal being to learn and make improvements in the Sprints to follow. Some improvement opportunities or best practices from this meeting could also be updated as part of the Scrum Guidance Body documents.'
	]
}; // prin_19

var prin_timeboxing = {
    id: 'prin_26',
    title: 'Time-boxing',
    stitle: 'Overview',
    comment: [
	'Scrum treats time as one of the most important constraints in managing a project. To address the constraint of time, Scrum introduces a concept called ‘Time-boxing’ which proposes fixing a certain amount of time for each process and activity in a Scrum project. This ensures that Scrum Team members do not take up too much or too little work for a particular period of time and do not expend their time and energy on work for which they have little clarity.',
	'Some of the advantages of Time-boxing are as follows:',
	'* Efficient development process',
	'* Less overheads',
	'* High velocity for teams',
	'Time-boxing can be utilized in many Scrum processes, for example, in the Conduct Daily Standup process, the duration of the Daily Standup Meeting is Time-boxed. At times, Time-boxing may be used to avoid excessive improvement of an item (i.e., gold-plating).',
	'Time-boxing is a critical practice in Scrum and should be applied with care. Arbitrary Time-boxing can lead to de-motivation of the team and may have the consequence of creating an apprehensive environment, so it should be used appropriately.'
    ],
    image: '../images/timeboxing.png'
}; // prin_26

txtTimeBoxing = {
	id: 'prin_20',
	title: 'Time-boxing',
	stitle: 'Overview',
	overview: prin_timeboxing,
	sprint: prin_sprint,
	standup: prin_standup,
	planning: prin_planning,
	review: prin_review,
	retrospect: prin_retrospect
};

txtIterative = {
	id: 'prin_21',
	stitle: 'IterDev',
	title: 'Iterative Development',
	overview: {
		comment: [
		'The Scrum framework is driven by the goal of delivering maximum business value in a minimum time span. To achieve this practically, Scrum believes in Iterative Development of Deliverables.',
		'In most complex projects, the customer may not be able to define very concrete requirements or is not confident of what the end product may look like. The iterative model is more flexible in ensuring that any change requested by the customer can be included as part of the project. User Stories may have to be written constantly throughout the duration of the project. In the initial stages of writing, most User Stories are high-level functionalities. These User Stories are known as Epic(s). Epic(s) are usually too large for teams to complete in a single Sprint. Therefore, they are broken down into smaller User Stories.',
		'Each complex aspect of the project is broken down through progressive elaboration during the Groom Prioritized Product Backlog process. The Create User Stories and the Estimate, Approve, and Commit User Stories processes are used to add new requirements to the Prioritized Product Backlog. The Product Owner’s task is to ensure increased ROI by focusing on value and its continuous delivery with each Sprint. The Product Owner should have a very good understanding of the project’s business justification and the value the project is supposed to deliver as he drafts the Prioritized Product Backlog and thereby decides what deliverables and hence values are delivered in each Sprint. Then the Create Tasks, Estimate Tasks, and Create Sprint Backlog processes produce the Sprint Backlog which the team uses to create the deliverables.',
		'In each Sprint, the Create Deliverables process is used to develop the Sprint’s outputs. The Scrum Master has to ensure that the Scrum processes are followed and facilitates the team to work in the most productive manner possible. The Scrum Team self-organizes and aims to create the Sprint Deliverables from the User Stories in the Sprint Backlog. In large projects, various cross-functional teams work in parallel across Sprints, delivering potentially shippable solutions at the end of each Sprint. After the Sprint is complete, The Product Owner accepts or rejects the deliverables based on the Acceptance Criteria in the Demonstrate and Validate Sprint process.',
		'As illustrated below, Scrum projects are completed in an iterative manner delivering value throughout the lifecycle of the project.',
		'The benefit of iterative development is that it allows for course correction as all the people involved get better understanding of what needs to be delivered as part of the project and incorporate these learning in an iterative manner. Thus the time and effort required to reach the final end point is greatly reduced and the team produces deliverables that are better suited to the final business environment.'
		],
		image: '../images/iterative.png'
	}
};

txtVs = {
	id: 'prin_22',
	title: 'Scrum vs. Traditional Project Management',
	comment: [
		'The emphasis in traditional Project Management is to conduct detailed upfront planning for the project with emphasis on fixing the scope, cost, and schedule and managing those parameters. Traditional project management may at times lead to a situation where the plan has succeeded yet the customer is not satisfied.',
		'The Scrum Framework is founded on the belief that the knowledge workers of today can offer much more than just their technical expertise, and that trying to fully map out and plan for an ever-changing environment is not efficient. Therefore, Scrum encourages data-based, iterative decision making. In Scrum, the primary focus is on delivering products that satisfy customer requirements in small iterative shippable increments.',
		'To deliver the greatest amount of value in the shortest amount of time, Scrum promotes prioritization and Time-boxing over fixing the scope, cost and schedule of a project. An important feature of Scrum is selforganization, which allows the individuals who are actually doing the work to estimate and take ownership of tasks.'
	]
};

exports.txtIntroduction = txtIntroduction;
exports.txtEpc = txtEpc;
exports.txtSelforg = txtSelforg;
exports.txtCollaboration = txtCollaboration;
exports.txtValueBased = txtValueBased;
exports.txtTimeBoxing = txtTimeBoxing;
exports.txtIterative = txtIterative;
exports.txtVs = txtVs;

exports.prin_transparency = prin_transparency;
exports.prin_inspection = prin_inspection;
exports.prin_adaptation = prin_adaptation;
exports.prin_benefits = prin_benefits;
exports.prin_goals = prin_goals;
exports.prin_colBenefits = prin_colBenefits;
exports.prin_importance = prin_importance;
exports.prin_colocated = prin_colocated;
exports.prin_distributed = prin_distributed;
exports.prin_sprint = prin_sprint;
exports.prin_standup = prin_standup;
exports.prin_planning = prin_planning;
exports.prin_review = prin_review;
exports.prin_retrospect = prin_retrospect;
exports.prin_epc = prin_epc; // prin_23
exports.prin_selforg = prin_selforg; // prin_24
exports.prin_collab = prin_collab; // prin_25
exports.prin_timeboxing = prin_timeboxing // prin_26