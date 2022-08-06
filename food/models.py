from django.db import models




class Category(models.Model):
    class Meta:
        verbose_name_plural = 'categories'
    name = models.CharField(max_length=25)
    name_ru = models.CharField(max_length=25)
    name_ar = models.CharField(max_length=25)

    def __str__(self):
        return self.name





class Food(models.Model):
    category = models.ManyToManyField(Category,related_name='dishs')
    name = models.CharField(max_length=100,null=False)
    name_ru = models.CharField(max_length=100, null=True)
    name_ar = models.CharField(max_length=100, null=True)
    description = models.TextField(null=True,blank=True)
    description_ar = models.TextField(null=True, blank=True)
    description_ru = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=7,decimal_places=2,null=False)
    image = models.ImageField()

    def __str__(self):
        return self.name
