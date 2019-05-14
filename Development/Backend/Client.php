<?php
class Client
{
    /***************************************************************************************************************
	*																											   *
	*										Declaration Attributes												   *
	*																											   *
	****************************************************************************************************************/
	
    private $Client_Name;
    private $Client_National_ID ;
	private $Client_Phone ;
	private $Client_Password;
	private $Client_Email;
	
    /***************************************************************************************************************
	*																											   *
	*												Getters						    							   *
	*																											   *
	****************************************************************************************************************/
    // Method to get the national_ID
    public function getNational_ID()
	{
        return ($this->Client_National_ID);
    }
	
	// Method to get the user name
    public function getUserName()
	{
        return ($this->Client_Name);
    }
	
	// Method to get the phone
    public function getPhone()
	{
        return ($this->Client_Phone);
    }
	
	// Method to get the password
    public function getPassword()
	{
        return ($this->Client_Password);
    }
	
	
	// Method to get the email
    public function getEmail()
	{
        return ($this->Client_Email);
    }
    
	
    /***************************************************************************************************************
	*																											   *
	*													Setters													   *
	*																											   *
	****************************************************************************************************************/
    // Method to set the national_ID
    public function setNational_ID($Client_National_ID)
	{
        this.$Client_National_ID = $Client_National_ID;
    }
	
	// Method to set the User Name
    public function setUserName($Client_Name)
	{
        this.$Client_Name = $Client_Name;
    }
	
	// Method to set the phone
    public function setPhone($Client_Phone)
	{
        this.$Client_Phone = $Client_Phone;
    }
	
	// Method to set the Password
    public function setPassword($Client_Password)
	{
        this.$Client_Password= $Client_Password;
    }
	
	// Method to set the Email
    public function setEmail($Client_Email)
	{
        this.$Client_Email = $Client_Email;
    }
	
	/***************************************************************************************************************
	*																											   *
	*										     Processing Methods  											   *
	*																											   *
	****************************************************************************************************************/
	
	public function viewAccounts()
	{
		
		
		// add code to view accounts of customers
		
	}
		
}
?>