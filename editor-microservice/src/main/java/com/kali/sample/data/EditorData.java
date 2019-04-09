package com.kali.sample.data;

import java.util.Arrays;
import java.util.List;

import com.kali.sample.dto.Editor;;

/**
 * Static data.
 *
 * @author kali
 *
 */
public class EditorData {

	public static List<Editor> getEditors() {
		Editor Editor_1 = new Editor("1", "12100747444", "Dunod");
		Editor Editor_2 = new Editor("2", "1788834755", "Packt");
		Editor Editor_3 = new Editor("1", "12000747777", "Bleeding Edge Press");
		return Arrays.asList(Editor_1, Editor_2, Editor_3);
	}
}
