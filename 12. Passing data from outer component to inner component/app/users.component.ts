import { Component } from '@angular/core';

@Component({

	selector:'app-users',
	template:`<h2>USERS COMPONENT</h2>
	<h3>Country Of User is {{parentData}}</h3>
	<ul>
<li>Shantanu</li>
<li>Himanshu</li>
<li>Rishabh</li>
<li>Aman</li>
<li>Ujjwal</li>
<li>Arpit</li>
<li>Ankur</li>
<li>Abhineet</li>
<li>Siddhant</li>
<li>Shushant</li>
</ul>`,
inputs:['parentData']
})

export class UsersComponent{
public parentData:string;
}
