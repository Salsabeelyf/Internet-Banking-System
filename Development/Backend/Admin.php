<?php 
include "Client.php";

?>


<?php
class Admin
{
    /***************************************************************************************************************
	*																											   *
	*										Declaration Attributes												   *
	*																											   *
	****************************************************************************************************************/
	
    private $Admin_Name;
    private $Admin_National_ID ;
	private $Admin_Phone ;
	private $Admin_Password;
	private $Admin_Email;
	private $Staff_ID;
	
	$ClientObj = new Client();
	
    /***************************************************************************************************************
	*																											   *
	*												Getters						    							   *
	*																											   *
	****************************************************************************************************************/
    // Method to get the admin national_ID
    public function getAdminNational_ID()
	{
        return ($this->Admin_National_ID);
    }
	
	// Method to get the user name
    public function getAdminName()
	{
        return ($this->Admin_Name);
    }
	
	// Method to get the admin phone
    public function getAdminPhone()
	{
        return ($this->Admin_Phone);
    }
	
	// Method to get the admin password
    public function getAdminPassword()
	{
        return ($this->Admin_Password);
    }
	
	
	// Method to get the admin email
    public function getAdminEmail()
	{
        return ($this->Admin_Email);
    }
    
	
	// Method to get the staff_ID
    public function getStaffID()
	{
        return ($this->Staff_ID);
    }	
    /***************************************************************************************************************
	*																											   *
	*													Setters													   *
	*																											   *
	****************************************************************************************************************/
    
	// Method to set the admin national_ID
    public function setAdminNational_ID($Admin_National_ID)
	{
        this->$Admin_National_ID = $Admin_National_ID;
    }
	
	// Method to set the admin Name
    public function setAdminName($Admin_Name)
	{
        this->$Admin_Name = $Admin_Name;
    }
	
	// Method to set the phone
    public function setAdminPhone($Admin_Phone)
	{
        this->$Admin_Phone = $Admin_Phone;
    }
	
	// Method to set the admin Password
    public function setAdminPassword($Admin_Password)
	{
        this->$Admin_Password= $Admin_Password;
    }
	
	// Method to set the Email
    public function setAdminEmail($Admin_Email)
	{
        this->$Admin_Email = $Admin_Email;
    }
	
	// Method to set the staff_ID
    public function setStaff_ID($Staff_ID)
	{
        this->$Staff_ID = $Staff_ID;
    }
	
	/***************************************************************************************************************
	*																											   *
	*										     Processing Methods  											   *
	*																											   *
	****************************************************************************************************************/
	
	public function addClient($Client_Name , $Client_ID , $Client_Phone , $Client_Password , $Client_Email)
	{
		
		
		// add code to add accounts of clients
		
	}
	
	public function removeClient($ClientObj)
	{
		
		
		// add code to remove accounts of clients
		
	}
		
}
?><?php