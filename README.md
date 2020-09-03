# What is Tickie?
[Tickie](https://metildachee.github.io/tickie) is a web based Ticket Support System built on the MERN stack with Antd framework.

# How does it work?
## Ticket lifecycles
A ticket's life cycle evolves as follows:
1. Open
The ticket initiated by the client.
2. Assigned
The ticket has been delegated by an administrator to an agent.
3. In-progress
The agent is working on the ticket.
4. Resolved
The ticket has been resolved.
5. Archived
The ticket has been archived.

## User access controls
<table>
  <tbody>
    <tr>
      <th>User type</th>
      <th>Permission</th>
    </tr>
    <tr>
      <td>Client</td>
      <td>
        <ul>
          <li>Add ticket</li>
          <li>View KPI</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Admin</td>
      <td>
        <ul>
          <li>Add category</li>
          <li>Add organisation</li>
          <li>Add accounts</li>
          <li>View category, organisation</li>
          <li>Assign tickets</li>
          <li>Archive tickets</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Agent</td>
      <td>
        <ul>
          <li>Resolve tickets</li>
          <li>View KPI</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

# Technologies used
## Prototyping
[Mockups](https://www.figma.com/files/project/13983308/tickie)

## Front end
### React.js
React with redux was used for the front-end.
### Antd
[Antd](https://ant.design/) was used for UI/UX.
## Backend 
### Node.js, Express, MongoDB
Fully self made REST [API](http://tickie-server.herokuapp.com).
## Deployment
### Docker
The app was containerialized before implementation.
### Heroku
The server is deployed in Heroku.
### Git pages
The client is deployed in Git pages.
## References
[Freepik](https://www.freepik.com/)

