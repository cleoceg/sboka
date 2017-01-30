 var items = require('../model/items');

var p08_1 = {
    id: 'p08_1',
    phase: 'Initiate',
    title: 'Create Project Vision',
    introduction: 'In this process, the Project Business Case is reviewed to create \n\
a Project Vision Statement that will serve as the inspiration and provide focus for \n\
the entire project. The Product Owner is identified in this process.',
    input: [items.it_8111, items.it_8112, items.it_8113, items.it_8114, items.it_8115, 
        items.it_8116, items.it_8117, items.it_8118, items.it_8119, items.it_81110, items.it_81111, items.it_81112],
    tools: [items.it_8121, items.it_8122, items.it_8123, items.it_8124],
    output: [items.it_8131, items.it_8132, items.it_8133, items.it_8134]
 };
 
 var p08_2 = {
    id: 'p08_2',
    phase: 'Initiate',
    title: 'Identify Scrum Master and Stakeholder(s)',
    introduction: 'In this process, the Scrum Master and Stakeholders are identified \n\
using specific Selection Criteria.',
    input: [items.it_8131, items.it_8132, items.it_8112, items.it_8113, items.it_8115, items.it_8216, items.it_8114, items.it_8218, items.it_8219, items.it_82110, items.it_82111, items.it_81112],
    tools: [items.it_8221, items.it_8222, items.it_8223, items.it_8224],
    output: [items.it_8231, items.it_8232]
 };
 
 var p08_3 = {
    id: 'p08_3',
    phase: 'Initiate',
    title: 'Form Scrum Team',
    introduction: 'In this process, Scrum Team members are identified. Normally the \n\
Product Owner has the primary responsibility of selecting team members, but often \n\
does so in collaboration with the Scrum Master.',
    input: [items.it_8131, items.it_8231, items.it_8132, items.it_8115, items.it_8218, items.it_8219, items.it_82110, items.it_82111, items.it_8319, items.it_81112],
    tools: [items.it_8321, items.it_8322, items.it_8323, items.it_8324, items.it_8325],
    output: [items.it_8331, items.it_8332, items.it_8333, items.it_8334]
 };
 
 var p08_4 = {
    id: 'p08_4',
    phase: 'Initiate',
    title: 'Develop Epic(s)',
    introduction: 'In this process, the Project Vision Statement serves as the basis \n\
for developing Epics. User Group Meetings may be held to discuss appropriate Epics.',
    input: [items.it_8411, items.it_8132, items.it_8232, items.it_8116, items.it_8415, items.it_8416, items.it_8417, items.it_8418, items.it_8419, items.it_84110, items.it_84111],
    tools: [items.it_8421, items.it_8422, items.it_8423, items.it_8424, items.it_8425, items.it_8426, items.it_8427],
    output: [items.it_8431, items.it_8432, items.it_8433, items.it_8434]
 };
 
 var p08_5 = {
    id: 'p08_5',
    phase: 'Initiate',
    title: 'Create Prioritized Product Backlog',
    introduction: 'In this process, Epic(s) are refined, elaborated, and then prioritized \n\
to create a Prioritized Product Backlog for the project. The Done Criteria is also established at this point.',
    input: [items.it_8411, items.it_8431, items.it_8432, items.it_8232, items.it_8132, items.it_8116, items.it_8517, items.it_8433, items.it_8434, items.it_8419, items.it_85111],
    tools: [items.it_8521, items.it_8422, items.it_8523, items.it_8524, items.it_8525, items.it_8526, items.it_8527],
    output: [items.it_8531, items.it_8532]
 };
 
 var p08_6 = {
    id: 'p08_6',
    phase: 'Initiate',
    title: 'Conduct Release Planning',
    introduction: 'In this process, the Scrum Core Team reviews the User Stories in \n\
the Prioritized Product Backlog to develop a Release Planning Schedule, which is \n\
essentially a phased deployment schedule that can be shared with the project stakeholders. \n\
The Length of Sprints is also determined in this process.',
    input: [items.it_8411, items.it_8232, items.it_8132, items.it_8531, items.it_8532, items.it_8112, items.it_8113, items.it_8115, items.it_8116, items.it_8117, items.it_86111, items.it_86112],
    tools: [items.it_8621, items.it_8622],
    output: [items.it_8631, items.it_8632, items.it_8633, items.it_8634]
 };
 
 var p09_1 = {
    id: 'p09_1',
    phase: 'Plan',
    title: 'Create User Stories',
    introduction: 'In this process, User Stories and their related User Story Acceptance \n\
Criteria are created. User Stories are usually written by the Product Owner and are \n\
designed to ensure that the customer’s requirements are clearly depicted and can be \n\
fully understood by all stakeholders. User Story Writing Workshops may be held which \n\
involves Scrum Team members creating the User Stories. User Stories are incorporated into the Prioritized Product Backlog.',
    input: [items.it_8411, items.it_8531, items.it_8532, items.it_8432, items.it_8232, items.it_8431, items.it_8517, items.it_8418, items.it_8419, items.it_91110],
    tools: [items.it_9121, items.it_8422, items.it_8421, items.it_9124, items.it_8424, items.it_8425, items.it_9127, items.it_9128],
    output: [items.it_9131, items.it_9132, items.it_9133, items.it_9134]
 };
 
 var p09_2 = {
    id: 'p09_2',
    phase: 'plan',
    title: 'Approve, Estimate, and Commit User Stories',
    introduction: 'In this process, the Product Owner approves User Stories for a \n\
Sprint. Then, the Scrum Master and Scrum Team estimate the effort required to develop \n\
the functionality described in each User Story. Finally, the Scrum Team commits to \n\
deliver the customer requirements in the form of Approved, Estimated, and Committed User Stories.',
    input: [items.it_8411, items.it_9212, items.it_9132, items.it_9214],
    tools: [items.it_8421, items.it_9222, items.it_9223, items.it_9224, items.it_9225, items.it_9226],
    output: [items.it_9231]
 };
 
 var p09_3 = {
    id: 'p09_3',
    phase: 'Plan',
    title: 'Create Tasks',
    introduction: 'In this process, the Approved, Estimated, and Committed User Stories \n\
are broken down into specific tasks and compiled into a Task List. Often, a Task Planning Meeting is held for this purpose.',
    input: [items.it_8411, items.it_9231],
    tools: [items.it_9321, items.it_9322, items.it_9323, items.it_9324],
    output: [items.it_9331, items.it_9332, items.it_9333]
 };
 
 var p09_4 = {
    id: 'p09_4',
    phase: 'Plan',
    title: 'Estimate Tasks',
    introduction: 'In this process, the Scrum Core Team, in Task Estimation Meetings, \n\
estimate the effort required to accomplish each task in the Task List. The result of this process is an Effort Estimated Task List.',
    input: [items.it_8411, items.it_9331, items.it_9413, items.it_9333, items.it_8434, items.it_9416],
    tools: [items.it_9421, items.it_9422, items.it_9222, items.it_9223, items.it_9225],
    output: [items.it_9431, items.it_9432]
 };
 
 var p09_5 = {
    id: 'p09_5',
    phase: 'Plan',
    title: 'Create Sprint Backlog',
    introduction: 'In this process, the Scrum Core Team holds Sprint Planning Meetings \n\
where the group creates a Sprint Backlog containing all tasks to be completed in the Sprint.',
    input: [items.it_8411, items.it_9431, items.it_8632, items.it_9514, items.it_9333, items.it_9516],
    tools: [items.it_9521, items.it_9522, items.it_9523],
    output: [items.it_9531, items.it_9532]
 };
 
 var p10_1 = {
    id: 'p10_1',
    phase: 'Implement',
    title: 'Create Deliverables',
    introduction: 'In this process, the Scrum Team works on the tasks in the Sprint \n\
Backlog to create Sprint Deliverables. A Scrumboard is often used to track the work \n\
and activities being carried out. Issues or problems being faced by the Scrum Team could be updated in an Impediment Log.',
    input: [items.it_8411, items.it_9531, items.it_10113, items.it_10114, items.it_8631, items.it_9333, items.it_10117],
    tools: [items.it_10121,items.it_10122, items.it_10123, items.it_10124],
    output: [items.it_10131,items.it_10132, items.it_10114, items.it_8416, items.it_8434, items.it_10136, items.it_9333]
 };
 
 var p10_2 = {
    id: 'p10_2',
    phase: 'Implement',
    title: 'Conduct Daily Standup',
    introduction: 'In this process, everyday a highly focused, Time-boxed meeting is \n\
conducted referred to as the Daily Standup Meeting. This is the forum for the Scrum \n\
Team to update each other on their progress and any impediments they may be facing.',
    input: [items.it_8331, items.it_8231, items.it_9532, items.it_10114, items.it_8131, items.it_10216, items.it_10113, items.it_9333],
    tools: [items.it_10221, items.it_10222, items.it_10223, items.it_10224],
    output: [items.it_9532, items.it_10114, items.it_10233, items.it_10113, items.it_8416, items.it_8434, items.it_10136, items.it_9333]
 };
 
 var p10_3 = {
    id: 'p10_3',
    phase: 'Implement',
    title: 'Groom Prioritized Product Backlog',
    introduction: 'In this process, the Prioritized Product Backlog is continuously \n\
updated and maintained. A Prioritized Product Backlog Review Meeting may be held, \n\
in which any changes or updates to the backlog are discussed and incorporated into \n\
the Prioritized Product Backlog as appropriate.',
    input: [items.it_10311, items.it_8531, items.it_10313, items.it_8415, items.it_8416, items.it_8434, items.it_10317, items.it_11334, items.it_9333, items.it_8631, items.it_103111],
    tools: [items.it_10321, items.it_10322, items.it_10323],
    output: [items.it_10331, items.it_10332]
 };
 
 var p11_1 = {
    id: 'p11_1',
    phase: 'Review',
    title: 'Convene Scrum of Scrums',
    introduction: 'In this process, Scrum Team representatives convene Scrum of Scrums \n\
(SoS) Meetings in predetermined intervals or whenever required to collaborate and track \n\
their respective progress, impediments, and dependencies across teams. This is relevant \n\
only for large projects where multiple Scrum Teams are involved.',
    input: [items.it_11111, items.it_8216, items.it_8115, items.it_11114, items.it_10114, items.it_9333, items.it_11117],
    tools: [items.it_11121, items.it_11122, items.it_11123, items.it_11124, items.it_11125],
    output: [items.it_11131, items.it_11132, items.it_10114, items.it_9333]
 };
 
 var p11_2 = {
    id: 'p11_2',
    phase: 'Review',
    title: 'Demonstrate and Validate Sprint',
    introduction: 'In this process, the Scrum Team demonstrates the Sprint Deliverables \n\
to the Product Owner and relevant stakeholders in a Sprint Review Meeting. The purpose \n\
of this meeting is to secure approval and acceptance of the product or service by the Product Owner.',
    input: [items.it_8411, items.it_10131, items.it_9531, items.it_8532, items.it_9413, items.it_8232, items.it_8631, items.it_8434, items.it_9333, items.it_112110],
    tools: [items.it_11221, items.it_11222, items.it_11223],
    output: [items.it_11231, items.it_11232, items.it_8434, items.it_11234, items.it_10332, items.it_9333]
 };
 
 var p11_3 = {
    id: 'p11_3',
    phase: 'Review',
    title: 'Retrospect Sprint',
    introduction: 'In this process, the Scrum Master and Scrum Team meet to discuss \n\
the lessons learned throughout the Sprint. This information is documented as lessons \n\
learned which can be applied to future Sprints. Often, as a result of this discussion, \n\
there may be Agreed Actionable Improvements or Updated Scrum Guidance Body Recommendations.',
    input: [items.it_8231, items.it_8331, items.it_11313, items.it_8131, items.it_11315],
    tools: [items.it_11321, items.it_11322, items.it_11323, items.it_11324, items.it_11325],
    output: [items.it_11331, items.it_11332, items.it_11333, items.it_11334, items.it_11335, items.it_11336]
 };
 
 var p12_1 = {
    id: 'p12_1',
    phase: 'Release',
    title: 'Ship Deliverables',
    introduction: 'In this process, Accepted Deliverables are delivered or transitioned to the relevant stakeholders. \n\
 A formal Working Deliverables Agreement documents the successful completion of the Sprint.',
    input: [items.it_8131, items.it_8232,items.it_11231,items.it_8631, items.it_8231,items.it_8331,items.it_9132, items.it_12118, items.it_12119],
    tools: [items.it_12121,items.it_12122],
    output: [items.it_12131,items.it_12132,items.it_12133]
 };
 
 var p12_2 = {
    id: 'p12_2',
    phase: 'Release',
    title: 'Retrospect Project',
    introduction: 'In this process, which completes the project, organizational stakeholders \n\
 and Scrum Core Team members assemble to retrospect the project and identify, \n\
document, and internalize the lessons learned. Often, these lessons lead to the documentation \n\
of Agreed Actionable Improvements, to be implemented in future projects.',
    input: [items.it_8411, items.it_8216, items.it_8115, items.it_8232, items.it_12215],
    tools: [items.it_12221, items.it_12222, items.it_12223],
    output: [items.it_11331, items.it_11332, items.it_12233, items.it_12234]
 };
 
 exports.p08_1 = p08_1;
 exports.p08_2 = p08_2;
 exports.p08_3 = p08_3;
 exports.p08_4 = p08_4;
 exports.p08_5 = p08_5;
 exports.p08_6 = p08_6;

 exports.p09_1 = p09_1;
 exports.p09_2 = p09_2;
 exports.p09_3 = p09_3;
 exports.p09_4 = p09_4;
 exports.p09_5 = p09_5;
 
 exports.p10_1 = p10_1;
 exports.p10_2 = p10_2;
 exports.p10_3 = p10_3;
 
 exports.p11_1 = p11_1;
 exports.p11_2 = p11_2;
 exports.p11_3 = p11_3;
 
 exports.p12_1 = p12_1;
 exports.p12_2 = p12_2;