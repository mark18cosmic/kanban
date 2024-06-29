# kanban
An agile kanban board with sub-tasks
**Figma Link**
https://www.figma.com/design/8cgFFMYZpY8HoLa4YWF8zP/kanban?node-id=0-1&t=Vtkx6NZ7yDe8esWZ-1

## Features
1. **Columns and Swimlanes**
   - Columns representing different stages (To Do, In Progress, Done)
   - Swimlanes for categorizing tasks (e.g., by project, priority, team)

2. **Cards**
   - Create, edit, and delete cards for tasks
   - Assign tasks to team members
   - Set due dates and priorities

### Sub-Story Features
1. **Sub-Story Hierarchy**
   - Ability to create sub-stories under main tasks
   - Collapsible and expandable sub-story lists within a card
   - Visual indicators to show the relationship between main tasks and sub-stories

2. **Independent Tracking**
   - Separate progress tracking for sub-stories
   - Individual status updates for sub-stories (e.g., To Do, In Progress, Done)

3. **Dependency Management**
   - Define dependencies between sub-stories and main tasks
   - Visual representation of dependencies (e.g., arrows connecting dependent tasks)

### Advanced Features
1. **Customizable Workflows**
   - Customize columns and workflows to fit different projects or teams
   - Templates for different types of workflows (e.g., software development, marketing)

2. **Detailed Card Information**
   - Attach files, links, and comments to cards
   - Rich text formatting for descriptions and comments
   - Checklists within cards for subtasks

3. **Time Tracking**
   - Built-in time tracking for tasks and sub-stories
   - Integration with external time-tracking tools

4. **Analytics and Reporting**
   - Burndown charts and cumulative flow diagrams
   - Reports on task completion rates, team performance, and bottlenecks

5. **Notifications and Reminders**
   - Email and in-app notifications for task updates
   - Reminders for upcoming due dates

### Collaboration Features
1. **Real-time Updates**
   - Real-time synchronization across all users
   - Activity logs to track changes and updates

2. **User Roles and Permissions**
   - Role-based access control (e.g., admin, member, guest)
   - Permissions to restrict editing or viewing certain tasks or boards

3. **Integration with Other Tools**
   - Integration with project management tools (e.g., Jira, Trello)
   - Integration with communication tools (e.g., Slack, Microsoft Teams)
   - API access for custom integrations

### Usability Features
1. **Search and Filters**
   - Advanced search functionality to find tasks and sub-stories quickly
   - Filters for status, assignee, priority, and due date

2. **Mobile Access**
   - Responsive design for mobile and tablet access
   - Dedicated mobile apps for iOS and Android

3. **User-friendly Interface**
   - Drag-and-drop functionality for moving tasks
   - Intuitive design with easy navigation and clear labels

## Tech Stack

### Frontend
- **Next.js**: React framework for server-rendered or statically-exported React applications
- **React**: JavaScript library for building user interfaces
- **Redux**: State management library
- **Styled-components**: For styling React components
- **Axios**: For making HTTP requests

### Backend
- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine
- **Express.js**: Web application framework for Node.js
- **PostgreSQL**: Relational database for storing task data
- **Sequelize**: ORM for Node.js to interact with PostgreSQL

### DevOps
- **Docker**: For containerizing applications
- **Kubernetes**: For container orchestration
- **Jenkins**: For continuous integration/continuous deployment (CI/CD)

### Other Tools
- **Git**: Version control system
- **Jest**: JavaScript testing framework
- **ESLint**: Tool for identifying and reporting on patterns in JavaScript
- **Prettier**: Code formatter