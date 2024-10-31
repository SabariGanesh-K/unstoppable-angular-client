import { Component, OnInit } from '@angular/core';
import { Seat } from '../../models/seat.model';
import { BookingAPIServiceService } from '../../booking-apiservice.service';
import { PingServiceService } from '../../ping-service.service';
import { catchError, interval, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-select-seat',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './select-seat.component.html',
  styleUrl: './select-seat.component.css'
})
export class SelectSeatComponent implements OnInit {
  showSeatList: Seat[] = [];
  total = 0;
  fillupSeat = [];
  bookedSeats = []
  availableseats = []
  offlineAlert = false;
  
  // subscription:Subscription;
  constructor(
    // private route:Router,
    // private BusService:SelectBusService
    private service: BookingAPIServiceService,
    private pingservice: PingServiceService
  ) { }
  ngOnInit() {
    this.checkPing()
    this.getbookSeat();
    interval(5000) // Check ping every 5 seconds
      .subscribe(() => { this.checkPing(); this.getbookSeat() });
  }
  userDetails={
    numberseats:0
  }
  Seat(e) {
    console.log("hehe");
  }
  async checkPing() {
    await this.pingservice.fetchPingResponse()
      .subscribe(status => {
      this.offlineAlert=false

        console.log("success",status);
      });
  }
  async getbookSeat() {

    let vall = [];
    await this.service.fetchBookedSeats().subscribe(seats => {
      this.bookedSeats = seats
      seats.map((i: any) => {
        // this.fillupSeat.push(i)
        this.changeSeatColor(i)
      })
      console.log(seats)
    })
    // const val = ['A-1','B-77'];
    console.log(vall)

  }

  changeSeatColor(seatNo: any) {
    let id = document.getElementById(seatNo)
    id.innerHTML = `  <img src="../../../assets/img/bookseat.png">`
    // id.removeEventListener("click",this.Seat);


  }
  showSeatColor(seatNo: any) {
    let id = document.getElementById(seatNo)
    id.innerHTML = `  <img src="../../../assets/img/fseat.png">`
    // id.removeEventListener("click",this.Seat);


  }
  async submitSeats(form:NgForm) {
    console.log("booking for ",this.userDetails.numberseats)
    this.service.fetchAvailableSeats(this.userDetails.numberseats) // Assuming n is always 5
      .subscribe(
        availableSeats => {
          // Use the availableSeats array here
          this.availableseats = availableSeats;
          availableSeats.map((i: any) => {
            console.log(i)
            // this.fillupSeat.push(i)
            this.showSeatColor(i)
            this.bookedSeats.push(i)
          })
          console.log('Available seats:', availableSeats);
        }
        // error => {
        //   // Handle error gracefully
        //   console.error('Error fetching available seats:', error);
        //   // Display error message to user
        //   // Perform alternative actions (e.g., disable submit button)
        // }
      );
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
