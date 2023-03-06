# Program Menghitung Cubic Centimeter Motor

# Mendefinisikan Variabel
panjang = float(input("Masukkan Panjang Silinder Motor: "))
diameter = float(input("Masukkan Diameter Silinder Motor: "))

# Menghitung Volume Silinder
volume = 3.14 * (diameter/2) * (diameter/2) * panjang

# Menghitung Cubic Centimeter
cc = volume * 1000

# Menampilkan Hasil
print("Volume Silinder Motor Adalah:", volume, "cm3")
print("Cubic Centimeter Motor Adalah:", cc, "cc")
