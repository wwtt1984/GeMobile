package com.phone.phone;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.json.JSONException;
import org.json.JSONObject;

public class PhoneResult {

	private String number = "";         
    private Date startTime;      
    private Date endTime;;     
    private long duration = 0;     

    public JSONObject toJSONObject() throws JSONException {

    	SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss:S");
    	
        return new JSONObject(
                "{number:" + JSONObject.quote(number) +
                ",startTime:" + JSONObject.quote(sdf.format(startTime)) +
                ",endTime:" + JSONObject.quote(sdf.format(endTime)) +
                ",duration:" + duration + "}");
    }

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public Date getStartTime() {
		return startTime;
	}

	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}

	public Date getEndTime() {
		return endTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}

	public long getDuration() {
		return duration;
	}

	public void setDuration(long duration) {
		this.duration = duration;
	}
}