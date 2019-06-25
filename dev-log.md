BH

6/14
##To Do
  rename siblings to users

  modify model to include role
  kindWords and niceDeeds should include status pending/approved

  finish login Authorization

6/20
  MainContainer should include child's milestones etc.
  allow for signup
  (last 10 min from GlobeTrotter 4)

6/21
update controllers
so that we can get a user's niceDeeds, kindWords and milestones on load..
add actions/reducers/state/props needed for this to happen


##6/23
fix Login
review react router
review components/Login.js  



##QUESTIONS TO TC:
  -in components/users did not allow a <div> in the return. why?
  const Users = props => {
    const UserCards = props.users.length > 0 ?
    props.users.map(u => <UserCard user={u} key={u.id}/>) :
    null

    return (
      UserCards
    )
  }
  -should I keep old migration files?
  -how to remove the login form component once user is already logged in
  - picture issues. some don't show.
  - how to minimize them?
  
