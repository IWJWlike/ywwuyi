package com.iwjw.test;


import com.iwjw.entity.BaikeList;
import com.iwjw.service.BaikeListService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


import java.util.List;

/**
 * @Author:
 * @Date: 2018/2/9 15:44
 * @Description:
 */
public class Test {
    public static void main(String[] args) {
        /*ApplicationContext act = new ClassPathXmlApplicationContext("applicationContext-mybatis.xml");
        NewsService newsService =(NewsService) act.getBean("newsServiceImpl");
        List<News> newsList = newsService.findNews('1');
        SimpleDateFormat sdf= new SimpleDateFormat("yyyy-MM-dd");
        String dateStr=null;
        String ntitle=null;
        List<String> dateTitleList=new ArrayList<String>();
        for (News newsNoticeList :
                newsList) {
            ntitle= newsNoticeList.getNtitle();
            dateStr = sdf.format(newsNoticeList.getNdate());
            dateTitleList.add(ntitle);
            dateTitleList.add(dateStr);
        }

        for (String str :
                dateTitleList) {
            System.out.println(str.toString());
        }*/

        ApplicationContext act = new ClassPathXmlApplicationContext("applicationContext-mybatis.xml");
        BaikeListService baikeListService = (BaikeListService) act.getBean("BaikeListServiceImpl");
        List<BaikeList> lists = baikeListService.getBaikeList();
        for (BaikeList list:lists) {
            System.out.println(list.getTitle());
        }
    }
}
