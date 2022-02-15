<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contacts; 
use Illuminate\Support\Facades\Mail;

class ContactsController extends Controller
{
    public function storeContactForm(Request $request) 
    { 
        $request->validate([ 
            'name' => 'required', 
            'email' => 'required|email', 
            'subject' => 'required', 
            'message' => 'required', 
        ]); 

        $input = $request->all(); 
        // Contacts::create($input); 

        // //  Send mail to admin 
        Mail::send('email.contact', array( 
            'name' => $input['name'], 
            'email' => $input['email'],
            'subject' => $input['subject'], 
            'message' => $input['message'], 
        ), function($message) use ($request){ 
            $message->from($request->email); 
            $message->to('fernandes_10001@hotmail.com', 'Admin')->subject($request->get('subject'));
        }); 

        return response()->json([
            'success' => 'Contact Form Submit Successfully'
        ]); 
    } 
}
