import unittest
from app import APP


class MyTestCase(unittest.TestCase):
    tester = APP.test_client()

    def test_booksearch(self):
        response = self.tester.get('/booksearch')
        self.assertEqual(response.status_code, 200)
        self.assertEqual('bookcategories' in response.json, True)

    def test_booksearch_category(self):
        response = self.tester.get('/booksearch/History')
        self.assertEqual(response.status_code, 200)
        self.assertEqual('700 BC' in response.json['results'], True)

    def test_booksearch_category_bookname(self):
        response = self.tester.get('/booksearch/History/700 BC')
        self.assertEqual(response.status_code, 200)
        self.assertEqual('700 BC' in response.json, True)

    def test_404(self):
        response = self.tester.get("/books")
        print(response.json)
        self.assertEqual(response.status_code, 404)
    

if __name__ == '__main__':
    unittest.main()