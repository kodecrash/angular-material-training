import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { VoteComponent } from './vote/vote.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo.service';
import { VoterComponent } from './voter/voter.component';
import { Voter1Component } from './voter1/voter1.component';
import { TodolistComponent } from './todolist/todolist.component';


@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    SimpleformComponent,
    VoterComponent,
    Voter1Component,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ TodoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
