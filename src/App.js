import React, { Component } from 'react';
import './App.css';
import './Login.css';
import swal from 'sweetalert';


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      
      isAdminLogin:false,
      isUserLogin:false,
      loginEmail:'',
      loginPassword:'',
      currentIndex:'',
      todos:[{
        firstname:'Shariq',
        secondname:'Ahmed',
        email:'shariq@gmail.com',
        joiningdate:'2018-08-23',
        salary:'25000'
      },
      {
        firstname:'Muhammad',
        secondname:'Ali',
        email:'ali@gmail.com',
        joiningdate:'2017-07-20',
        salary:'30000'
      },
      {
        firstname:'Abdul',
        secondname:'Rafay',
        email:'rafay@gmail.com',
        joiningdate:'2018-07-20',
        salary:'20000'
      }
    ],
      firstname:'',
      secondname:'',
      email:'',
      joiningdate:'',
      salary:'',
      upfirstname:'',
      upsecondname:'',
      upemail:'',
      upjoiningdate:'',
      upsalary:''
    }
    
    // For Login
    this.renderAuth = this.renderAuth.bind(this);
    this.renderLoginPass = this.renderLoginPass.bind(this);
    this.renderLoginEmail = this.renderLoginEmail.bind(this);

    //For App
    this.renderFirstname = this.renderFirstname.bind(this);
    this.renderSecondname = this.renderSecondname.bind(this);
    this.renderEmail = this.renderEmail.bind(this);
    this.renderJoiningdate = this.renderJoiningdate.bind(this);
    this.renderSalary = this.renderSalary.bind(this);
    this.renderAddItem = this.renderAddItem.bind(this);

    //Update Data
    this.uprenderFirstname = this.uprenderFirstname.bind(this);
    this.uprenderSecondname = this.uprenderSecondname.bind(this);
    this.uprenderEmail = this.uprenderEmail.bind(this);
    this.uprenderJoiningdate = this.uprenderJoiningdate.bind(this);
    this.uprenderSalary = this.uprenderSalary.bind(this);
    this.renderUpdateData = this.renderUpdateData.bind(this);

    // Logout
    this.logout = this.logout.bind(this);
}

renderLoginEmail(e){
  const em = e.target.value;
  this.setState({
      loginEmail:em
  }) 
}

renderLoginPass(e){
  const ps = e.target.value;
  this.setState({
      loginPassword:ps
  })
}

logout(){
  this.setState({
      isUserLogin:false,
      isAdminLogin:false
  })
}


renderAuth(evt){
  evt.preventDefault();
  if(this.state.loginEmail === "admin@domain.com" && this.state.loginPassword === "admin"){
      this.setState({
        isAdminLogin:true,
        isUserLogin:false,
        loginEmail:'',
        loginPassword:''
      })
      
  }
  else if(this.state.loginEmail === "user@domain.com" && this.state.loginPassword === "user"){
      this.setState({
        isAdminLogin:false,
        isUserLogin:true,
        loginEmail:'',
        loginPassword:''
      })
  }
  else{
      swal({
          title: "Error",
          text: "Wrong Email or Password",
          icon: "error",
        });
  }
}

renderLogin(){
  return (
      <div className="container"> 
          <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                  <div className="card card-signin">
                      <div className="card-body">
                          <h5 className="card-title text-center">Sign In</h5>
                          <form className="form-signin" onSubmit={this.renderAuth}>
                              <div className="form-label-group">
                                  <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required onChange={this.renderLoginEmail} value={this.state.loginEmail}/>
                                  <label for="inputEmail">Email address</label>
                              </div>

                              <div className="form-label-group">
                                  <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={this.renderLoginPass} value={this.state.loginPassword}/>
                                  <label for="inputPassword">Password</label>
                              </div>

                              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}


renderFirstname(e){
  this.setState({
    firstname:e.target.value
  })
}

renderSecondname(e){
  this.setState({
    secondname:e.target.value
  })
}

renderEmail(e){
  this.setState({
    email:e.target.value
  })
}

renderJoiningdate(e){
  this.setState({
    joiningdate:e.target.value
  })
}

renderSalary(e){
  this.setState({
    salary:e.target.value
  })
}

renderAddItem(e){
  e.preventDefault();
  let {firstname, secondname, email, joiningdate, salary, todos} = this.state;
  todos.push({
    firstname:firstname,
    secondname:secondname,
    email:email,
    joiningdate:joiningdate,
    salary:salary
  })
  this.setState({
    todos,
    firstname:'',
    secondname:'',
    email:'',
    joiningdate:'',
    salary:''
  })
  document.getElementById("addClose").click();
}

delete(index){
  const {todos} = this.state;
  todos.splice(index,1);
  this.setState({
    todos
  })
}

uprenderFirstname(e){
  this.setState({
    upfirstname:e.target.value
  })
}

uprenderSecondname(e){
  this.setState({
    upsecondname:e.target.value
  })
}

uprenderEmail(e){
  this.setState({
    upemail:e.target.value
  })
}

uprenderJoiningdate(e){
  this.setState({
    upjoiningdate:e.target.value
  })
}

uprenderSalary(e){
  this.setState({
    upsalary:e.target.value
  })
}

edit(index){
  const {todos} = this.state;
  this.setState({
    upfirstname: todos[index].firstname,
    upsecondname: todos[index].secondname,
    upemail: todos[index].email,
    upsalary: todos[index].salary,
    upjoiningdate: todos[index].joiningdate,
    currentIndex:index
  })
}

renderUpdateData(event){
  event.preventDefault();
  const {upfirstname, upsecondname, upemail, upjoiningdate, upsalary, currentIndex, todos} = this.state;
  todos[currentIndex].firstname = upfirstname;
  todos[currentIndex].secondname = upsecondname;
  todos[currentIndex].email = upemail;
  todos[currentIndex].joiningdate = upjoiningdate;
  todos[currentIndex].salary = upsalary;
  this.setState({
    todos,
    upfirstname:'',
    upsecondname:'',
    upemail:'',
    upjoiningdate:'',
    upsalary:''   
  })
  document.getElementById("updateClose").click();
}

renderTodos(){
  const {todos} = this.state;
  return todos.map((v,i)=>{
    return <tr>
            <td>{i+1}</td>
            <td>{v.firstname}</td>
            <td>{v.secondname}</td>
            <td>{v.email}</td>
            <td>{v.salary}</td>
            <td>{v.joiningdate}</td>
            {
              !this.state.isUserLogin ? <div>
                <td><button  onClick={this.edit.bind(this,i)} className="btn btn-outline-info"  data-toggle="modal" data-target="#updateDataModal"><i className="fa fa-pencil-square-o"></i></button></td>
                <td><button onClick={this.delete.bind(this,i)} className="btn btn-outline-danger"><i className="fa fa-trash-o"></i></button></td>
              </div> : ''
            }
          </tr>;
  })
}

renderApp(){
  return (
    <div className="container">
      <button className="logoutBtn" onClick={this.logout}><i className="fa fa-sign-out"></i> &nbsp;  Logout</button>
      {
        !this.state.isUserLogin ? <button className="btn customBtn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-plus"></i></button> : ''
      }
      <br />
      <br />
      <br />
      <div className="table-responsive">
        <table class="table table-striped table-dark text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Salary</th>
              <th scope="col">Job Start Date</th>
              {
                !this.state.isUserLogin ? <div>
                  <td>Edit</td>
                  <td>Delete</td>
                </div> : ''
              }
            </tr>
          </thead>
          <tbody>
            {
              this.renderTodos()
            }
          </tbody>
        </table>
      </div>

      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Add Details</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            
            <form class="form-control" onSubmit={this.renderAddItem}>
              <div class="modal-body">
                <div class="col-md-12 mb-3">
                  <input type="text" class="form-control" placeholder="Enter First Name" value={this.state.firstname} onChange={this.renderFirstname} />
                </div>
                <div class="col-md-12 mb-3">
                  <input type="text" class="form-control" placeholder="Enter Second Name" value={this.state.secondname} onChange={this.renderSecondname}  />
                </div>
                <div class="col-md-12 mb-3">
                  <input type="email" class="form-control" placeholder="Enter Email Address" value={this.state.email} onChange={this.renderEmail}  />
                </div>
                <div class="col-md-12 mb-3">
                  <input type="number" class="form-control spinner" placeholder="Enter Salary" value={this.state.salary} onChange={this.renderSalary}   />
                </div>
                <div class="col-md-12 mb-3">
                  <input type="date" class="form-control" placeholder="Enter Joining Date" value={this.state.joiningdate} onChange={this.renderJoiningdate}  />
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" id="addClose" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Add New Record</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="modal fade" id="updateDataModal" tabindex="-1" role="dialog" aria-labelledby="updateDataModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Edit Details</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            
            <form class="form-control" onSubmit={this.renderUpdateData}>
              <div class="modal-body">
              <h5 className="text-center pb-2">You editing item # {this.state.currentIndex + 1} currently!</h5>
                <div class="col-md-12 mb-3">
                  <input type="text" class="form-control" placeholder="Enter First Name" value={this.state.upfirstname} onChange={this.uprenderFirstname} />
                </div>
                <div class="col-md-12 mb-3">
                  <input type="text" class="form-control" placeholder="Enter Second Name" value={this.state.upsecondname} onChange={this.uprenderSecondname}  />
                </div>
                <div class="col-md-12 mb-3">
                  <input type="email" class="form-control" placeholder="Enter Email Address" value={this.state.upemail} onChange={this.uprenderEmail}  />
                </div>
                <div class="col-md-12 mb-3">
                  <input type="number" class="form-control spinner" placeholder="Enter Salary" value={this.state.upsalary} onChange={this.uprenderSalary}   />
                </div>
                <div class="col-md-12 mb-3">
                  <input type="date" class="form-control" placeholder="Enter Joining Date" value={this.state.upjoiningdate} onChange={this.uprenderJoiningdate}  />
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" id="updateClose" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-primary">Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

  render() {
    return(
      <div>
        { (!this.state.isAdminLogin && !this.state.isUserLogin) ? this.renderLogin() : this.renderApp()}
      </div>
    );
  }
}

export default App;
