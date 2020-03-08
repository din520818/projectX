from mysql import connector

connection = connector.connect(
    host="localhost",
    port=3306,
    user="root",
    passwd="passwd",
    database="production"
)

mycursor = connection.cursor()

# mycursor.execute('create table users(\
# id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,\
# firstname VARCHAR(30) NOT NULL,\
# lastname VARCHAR(30) NOT NULL,\
# email VARCHAR(50),\
#                  password varchar (20),\
# reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)')
cmd = """insert into users (firstname, lastname, email, password) values (%s,%s,%s,%s)"""
val = ("pradeep", "banjade", "a@b.com", "passwd")
mycursor.execute(cmd, val)
connection.commit()

cmd2 = "select * from users;"
mycursor.execute(cmd2)
res = mycursor.fetchall()
print(res)
mycursor.close()
connection.close()

