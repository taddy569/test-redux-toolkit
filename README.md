**Library**

1. typescript
2. redux-toolkit

**Config**

1. Absolute imports
2. Advanced Configuration

**Feature**

1. Can saving config of user for the next revisit site:

- Dark / Light Mode
- Favorite post (news, show, ask, jobs, ...)
  -> use 'redux persist' and 'local storage' to save this configuration

2. Pagination post, user can setup how many posts per page, this config should be saved like the (1) feature

- about pagination: should be infinite scroll list || from fist to last button? Pagination: 20 items per page

3. Use lazy import

4. Loading Modal for all app, but need to distinct what thing is loaded

**STEPS**

- Round 1: basic UI with some mock data
- Round 2: redux toolkit with no typescript
- Round 3: adding typescript

**Questions**

- How many times will be used for round 1, finish when ???
- New project or change this, should use webpack + babel + manual typescript, react, instead of "create-react-app" template
