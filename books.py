from app import DB


class Book(DB.Model):
    
    id = DB.Column(DB.Integer, primary_key=True)
    
    username = DB.Column(DB.String(80), unique=False, nullable=False)
    
    bookname = DB.Column(DB.String(80), unique=False, nullable=False)
    
    price = DB.Column(DB.Integer, unique=False, nullable=False)
    
    condition = DB.Column(DB.String(80), unique=False, nullable=False)
    
    location = DB.Column(DB.String(80), unique=False, nullable=False)
    
    category = DB.Column(DB.String(80), unique=False, nullable=False)
    #email = DB.Column(DB.String(120), unique=True, nullable=False)

    def __repr__(self):
        
        return '<User %r Book %r>' % (self.username,self.bookname)
        