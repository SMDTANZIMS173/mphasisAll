create database CarRentaldb
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) UNIQUE NOT NULL,
    Phone NVARCHAR(15) NOT NULL,
    Address NVARCHAR(255),
    LicenseNumber NVARCHAR(50) UNIQUE NOT NULL
	
);
CREATE TABLE Vehicles (
    VehicleID INT PRIMARY KEY IDENTITY(1,1),
    Brand NVARCHAR(50) NOT NULL,
    Model NVARCHAR(50) NOT NULL,
    Year INT NOT NULL,
    LicensePlate NVARCHAR(20) UNIQUE NOT NULL,
    carimage varchar(100),
    fueltype varchar(20),
    Status NVARCHAR(20) CHECK (Status IN ('Available', 'Rented', 'Maintenance')) NOT NULL,
    Rentperday int,
);

CREATE TABLE Rentals (
    RentalID INT PRIMARY KEY IDENTITY(1,1),
    CustomerID INT FOREIGN KEY REFERENCES Customers(CustomerID),
    VehicleID INT FOREIGN KEY REFERENCES Vehicles(VehicleID),
    StartDate DATE NOT NULL,
    EndDate DATE,
    Status NVARCHAR(20) CHECK (Status IN ('Ongoing', 'Completed', 'Cancelled')) NOT NULL
);

CREATE TABLE Payments (
    PaymentID INT PRIMARY KEY IDENTITY(1,1),
    RentalID INT FOREIGN KEY REFERENCES Rentals(RentalID),
    Amount DECIMAL(10,2) NOT NULL,
    PaymentDate DATE NOT NULL,
    PaymentMethod NVARCHAR(50) CHECK (PaymentMethod IN ('Credit Card', 'Debit Card', 'Cash', 'Online')) NOT NULL
);

INSERT INTO Vehicles (Brand, Model, Year, LicensePlate, Status, FuelType, carimage)
VALUES 
('Toyota', 'Corolla', 2022, 'TN01ABC123', 'Available', 'Petrol', 'a.jpg'),
('Honda', 'Civic', 2021, 'TN02XYZ456', 'Rented', 'Diesel', 'b.jpg'),
('Hyundai', 'Creta', 2023, 'TN03LMN789', 'Available', 'Petrol', 'c.jpg'),
('Ford', 'Mustang', 2020, 'TN04PQR234', 'Maintenance', 'Petrol', 'd.jpg'),
('Maruti', 'Swift', 2022, 'TN05DEF567', 'Available', 'CNG', 'e.jpg'),
('Tata', 'Nexon', 2021, 'TN06GHI890', 'Rented', 'Electric', 'f.jpg'),
('Mercedes', 'C-Class', 2023, 'TN07JKL345', 'Available', 'Diesel', 'g.jpg'),
('BMW', 'X5', 2020, 'TN08MNO678', 'Available', 'Petrol', 'h.jpg'),
('Kia', 'Seltos', 2022, 'TN09UVW901', 'Maintenance', 'Diesel', 'i.jpg'),
('Tesla', 'Model 3', 2023, 'TN10RST234', 'Available', 'Electric', 'j.jpg');

select * from Vehicles
alter table customers add username varchar(20)
alter table customers add pwd varchar(20)
select * from customers

UPDATE Vehicles SET RentPerDay = 2500 WHERE LicensePlate = 'TN01ABC123';
UPDATE Vehicles SET RentPerDay = 2200 WHERE LicensePlate = 'TN02XYZ456';
UPDATE Vehicles SET RentPerDay = 3000 WHERE LicensePlate = 'TN03LMN789';
UPDATE Vehicles SET RentPerDay = 3500 WHERE LicensePlate = 'TN04PQR234';
UPDATE Vehicles SET RentPerDay = 1800 WHERE LicensePlate = 'TN05DEF567';
UPDATE Vehicles SET RentPerDay = 2700 WHERE LicensePlate = 'TN06GHI890';
UPDATE Vehicles SET RentPerDay = 4500 WHERE LicensePlate = 'TN07JKL345';
UPDATE Vehicles SET RentPerDay = 5000 WHERE LicensePlate = 'TN08MNO678';
UPDATE Vehicles SET RentPerDay = 2600 WHERE LicensePlate = 'TN09UVW901';
UPDATE Vehicles SET RentPerDay = 6000 WHERE LicensePlate = 'TN10RST234';

select * from Rentals
select * from songs
select * from Payments

UPDATE Vehicles
SET carimage = REPLACE(carimage, '.jpg', '.jpeg')
WHERE carimage LIKE '%.jpg';
